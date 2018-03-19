globals [
  box-edge                            ;; distance of box edge from axes
  delta-horizontal-surface            ;; the size of the wall surfaces that run horizontally - the top and bottom of the box
  delta-vertical-surface              ;; the size of the wall surfaces that run vertically - the left and right of the box
  gravity-acceleration   ;; acceleration of field (gravity, electric)
  heading-acceleration   ;; direction at which field is applied
  avg-speed-init avg-energy-init      ;; initial averages
  avg-speed avg-energy                ;; current averages
  particle-mass
  tick-advance-amount                 ;; the amount by which we will advance ticks
  temperature
  volume
  pressure
  outside-energy
  lost-balls                     ;; particles that have escaped the pull of gravity (reached the top of the World & View)
                                      ;; these particles are removed from the simulation
  percent-lost-balls
  max-tick-advance-amount             ;; the largest a tick length is allowed to be
  maxballs                       ;; possibly omit later, to prevent balls slowing down too much so that it's visible and confuses the students about speed
  total-ball-number
  box-x box-y                ;; patch coords of box's upper right corner
  obstacles
]

breed[ balls ball]
breed [ flashes flash ]      ;; a breed which is used to mark the spot where a particle just hit the wall
breed [ erasers eraser ]


flashes-own [birthday]       ;; flashes only last for a short period and then disappear.
                             ;; their birthday helps us keep track of when they were created and
                             ;; when we need to remove them.
balls-own
[
  leader                     ;; for stick togather slider
  speed mass energy   slower-speed  faster-speed ;; particle info
  wall-hits                  ;; # of wall hits during this clock cycle
  momentum-difference        ;; used to calculate pressure from wall hits
  momentum-instant           ;; used to calculate pressure
  last-collision             ;; keeps track of last particle this particle collided with
  stuck-on-wall?             ;; pays attention if the balls is stuck to exclude him from movement
  turn-amount                         ;; This is used to make all of the nodes in a cluster turn by
                                      ;; the same number of degrees.  Each leader chooses a random
                                      ;; amount, then everyone else uses the amount from their leader.
  stick-to-wall?
]

erasers-own [ pressure? ]    ;; new

to paint-brush
    reset-ticks
    set maxballs 1000
    if mouse-down?                    ;; reports true or false to indicate whether mouse button is down
    [ask patch mouse-xcor mouse-ycor  ;; mouse-xcor and mouse-ycor report the position of the mouse --
        [ set pcolor blue   ;; note that they report the precise position of the mouse,
      ;;  ask neighbors [ set pcolor blue ]
      ;;paint-agents patches at-points [[1 0] [0 1] ]
      display ]      ;; so you might get a decimal number like 12.3, but "patch"
  ]
 end                                ;; automatically rounds to the nearest patch



to place-box
  reset-ticks
  if mouse-inside? [
    set box-x max (list 2 (abs round mouse-xcor))
    set box-y max (list 2 (abs round mouse-ycor))
    draw-box
    display
  ]
  if mouse-down? [ stop ]
end

to draw-box
  ask patches [
    set pcolor ifelse-value is-box? box-x box-y [ blue ] [ black ]
  ]
end

to-report is-box? [ x y ] ;; patch reporter
  report
    (abs pxcor = x and abs pycor <= y) or
    (abs pycor = y and abs pxcor <= x)
end



to paint-agents [agents]
  ask agents [ set pcolor blue ]
end



to place-balls
  set maxballs 1000
  set-default-shape flashes "square";;new
  if mouse-down?
  [
    paint-balls number-of-balls-to-add mouse-xcor mouse-ycor
    while [mouse-down?] [ ] ; wait until mouse button released
  ]
   set total-ball-number (count balls)

  display
end

to paint-balls [n x y]
   ifelse ( count balls <= (maxballs - n) )
   [
     create-balls n
     [
        set shape  "circle"
        setxy x y
        set leader self
        set speed init-ball-speed
        set slower-speed (init-ball-speed / 2)
        set faster-speed (init-ball-speed * 2)
        set mass balls-Size
        set last-collision nobody
        set stuck-on-wall? false
        set wall-hits 0
        set momentum-difference 0
        set-balls-color
        set size balls-Size
        set energy (0.5 * mass * (speed ^ 2))
        ;; if we're only placing -one particle, use the exact position
        if n > 1
        [ jump random-float 5 ]
     ]
  ]
  [user-message (word "The maximum number of balls allowed in this model is "  maxballs  ".  You can not add "  n
  " more balls to the "  (count balls)  " you already have in the model")]
  calculate-tick-advance-amount
  set total-ball-number  (count balls )

ifelse (if-field-is-on-increase-speed-in-it's-direction = "none" ) [set gravity-acceleration 0]
                              [ifelse (if-field-is-on-increase-speed-in-it's-direction = "Gravity")
                                   [set gravity-acceleration 9.8 set heading-acceleration 180][set gravity-acceleration 9.8 set heading-acceleration 90]]                                   ;;; example:  a box with an box-edge of 10, is drawn with
   ;; box has constant size.                                       ;;; setting acceleration and direction of field
  if(if-field-is-on-increase-speed-in-it's-direction = "top to bottom")[ set box-edge (max-pxcor)    ;; make floor
                         ask patches with [ pycor = ( - box-edge) ]
                                              [ set pcolor brown ]
  update-variables
  set avg-speed-init avg-speed
  set avg-energy-init avg-energy]

end

to paint-world
  if (background-color = "pink") [set pcolor pink]
  if (background-color = "yellow") [set pcolor yellow]
  if (background-color = "white") [set pcolor white]
  if (background-color = "green") [set pcolor green]
  if (background-color = "gray") [set pcolor gray]
  if (background-color = "black") [set pcolor black]
end

to set-balls-color
  if (balls-color = "pink")[ set color pink]
  if(balls-color ="red")[set color red]
  if(balls-color = "green") [set color green]
  if(balls-color = "black") [set color black]
  if(balls-color = "orange") [set color orange]
  if(balls-color = "white") [set color white]
end



to go
every (1 / init-ball-speed)[
   ifelse trace?
  [ if any? balls
    [ask min-one-of balls [who] [ pen-down ] ] ]
  [ ask balls [ pen-up ] ]
  RESET-TICKS
  tick-advance tick-advance-amount

  ask balls [
   ifelse stick-to-wall? = true  [stick if stuck-on-wall? = false [move]][move]
    if stuck-on-wall? = true [set avg-speed  [0] of balls]
      hit-wall
    meet-with-another-ball
    ]
  ask flashes with [ticks - birthday > -0.4]
    [ die ]
    calculate-tick-advance-amount
  if any? balls
    [ set avg-speed  mean [speed] of balls]
    display]
  if (if-meet-ball-speed = "zero") [stop]
end


to move ;; particle procedure

  if(init-heading = "random")[

    if (every-step-move = "forward the same speed")[
  if patch-ahead (speed * tick-advance-amount) != patch-here
  [ set last-collision nobody ]
      jump (speed * tick-advance-amount)]

  if (every-step-move = "forward faster")[ if patch-ahead (faster-speed * tick-advance-amount) != patch-here
  [ set last-collision nobody ]
      jump (faster-speed * tick-advance-amount)]

  if (every-step-move = "forward slower")[ if patch-ahead (slower-speed * tick-advance-amount) != patch-here
  [ set last-collision nobody ]
      jump (slower-speed * tick-advance-amount)]
  ]


 if ( init-heading = "right") [if patch-ahead (faster-speed * tick-advance-amount) != patch-here
  [ set last-collision nobody ]
    if (every-step-move = "forward the same speed")[
      set heading 90 jump (speed * tick-advance-amount)]
    if (every-step-move = "forward faster")[
      set heading 90 jump (faster-speed * tick-advance-amount)]
   if (every-step-move = "forward slower")[
        set heading 90 jump (slower-speed * tick-advance-amount)]

]

   if ( init-heading = "left") [if patch-ahead (faster-speed * tick-advance-amount) != patch-here
  [ set last-collision nobody ]
    if (every-step-move = "forward the same speed")[
      set heading 270  jump (speed * tick-advance-amount)  ]
    if (every-step-move = "forward faster")[
        set heading 270 jump (faster-speed * tick-advance-amount) ]
   if (every-step-move = "forward slower")[
        set heading 270 jump (slower-speed * tick-advance-amount) ]
]

if ( init-heading = "up") [if patch-ahead (faster-speed * tick-advance-amount) != patch-here
  [ set last-collision nobody ]
    if (every-step-move = "forward the same speed")[
      set heading 0 jump (speed * tick-advance-amount) ]
    if (every-step-move = "forward faster")[
        set heading 0 jump (faster-speed * tick-advance-amount) ]
   if (every-step-move = "forward slower")[
        set heading 0 jump (slower-speed * tick-advance-amount) ]
]

if ( init-heading = "down") [if patch-ahead (faster-speed * tick-advance-amount) != patch-here
  [ set last-collision nobody ]
    if (every-step-move = "forward the same speed")[
      set heading 180 jump (speed * tick-advance-amount) ]
    if (every-step-move = "forward faster")[
        set heading 180 jump (faster-speed * tick-advance-amount) ]
   if (every-step-move = "forward slower")[
        set heading 180 jump (slower-speed * tick-advance-amount) ]
]




 factor-gravity
end

to move-in-collision

   let candidate 0
   if count other balls-here  = 1
  [
    set candidate one-of other balls-here with
      [who < [who] of myself and myself != last-collision ]
   if (candidate != nobody) and (speed > 0 or [speed] of candidate > 0)
   [

      if (if-meet-ball-speed = "no change")[move]

      if (if-meet-ball-speed = "increase")[ set speed faster-speed move]
      if (if-meet-ball-speed = "decrease")[ set speed slower-speed move]
      if(if-meet-ball-heading = "turn left")[ lt 90 - random-float 45]
      if(if-meet-ball-heading = "turn-right") [ lt 90 - random-float 45]
    ]
  ]
end

to move-hit-wall
avoid-wall
   if (if-meet-ball-speed = "no change")[move]

end


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;bounce;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

to hit-wall

if (if-hit-wall-heading = "no change")[
    if (if-hit-wall-speed = "no change")[move-hit-wall]
    if (if-hit-wall-speed = "zero")     [ stick ]
    if (if-hit-wall-speed = "increase")[ move-hit-wall]
    if (if-hit-wall-speed = "decrease")[move-hit-wall]
     if (if-hit-wall-speed = "billiards")[user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]

  ]
  if (if-hit-wall-heading = "turn left")[
    if (if-hit-wall-speed = "no change") [ move-hit-wall]
    if (if-hit-wall-speed = "zero")      [stick]
    if (if-hit-wall-speed = "increase")  [ move-hit-wall]
     if (if-hit-wall-speed = "decrease") [move-hit-wall]
      if (if-hit-wall-speed = "billiards")[user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]
  ]
  if (if-hit-wall-heading = "turn right")[
     if (if-hit-wall-speed = "no change")[move-hit-wall]
     if (if-hit-wall-speed = "zero")     [stick]
     if (if-hit-wall-speed = "increase") [move-hit-wall]
     if (if-hit-wall-speed = "decrease") [move-hit-wall]
    if (if-hit-wall-speed = "billiards")[user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]
  ]

   if (if-hit-wall-heading = "billiards")[
    if (if-hit-wall-speed = "no change")[ user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]
    if (if-hit-wall-speed = "zero") [stick]
    if (if-hit-wall-speed = "increase")[ user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]
    if (if-hit-wall-speed = "decrease")[ user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]
    if (if-hit-wall-speed = "billiards")[bounce]
  ]


end

to bounce

    let candidates1 balls with [([pcolor] of patch-at-heading-and-distance -90 0.5 = blue)]
    bounce-candidates candidates1
    let candidates2 balls with [([pcolor] of patch-at-heading-and-distance 90 0.5 = blue)]
    bounce-candidates candidates2
    let candidates3 balls with [([pcolor] of patch-at-heading-and-distance 0 0.5 = blue)]
    bounce-candidates candidates3
    let candidates4 balls with [([pcolor] of patch-at-heading-and-distance 180 0.5 = blue)]
    bounce-candidates candidates4


end

to bounce-candidates [candidates-only]
    if any? candidates-only [
      let new-patch patch-ahead 1
      let new-px [pxcor] of new-patch
      let new-py [pycor] of new-patch
      ;; if hitting the bottom, reflect heading around y axis
     if (new-py = ( - box-edge))
      [foreach [leader] of candidates-only [ set heading (180 - heading)]]
     ask patch new-px new-py [
     if not shade-of? blue [pcolor] of new-patch
         [ stop ]
       sprout-flashes 1 [
       set color [pcolor] of patch-here - 2
       set birthday ticks
        display
      ]
    ]


                ]
        set last-collision nobody

           ifelse ( stick-to-wall? = true )
           [ask candidates-only [set wall-hits 1]]
           [ask candidates-only [set heading (heading - 180)
             fd 1]

  ]
end


to avoid-wall

  let new-patch patch-ahead 1
  if (shade-of? blue [pcolor] of new-patch)
    [ if ((if-hit-wall-speed) = "increase") [ set speed faster-speed]
      if((if-hit-wall-speed) = "decrease") [ set speed slower-speed]
      if ((if-hit-wall-heading) = "turn left" ) [ lt 90 - random-float 45]
       if( (if-hit-wall-heading) = "turn right" ) [rt 90 - random-float 45]
    ]

end

 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;collision;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

to meet-with-another-ball


  if (if-meet-ball-heading = "no change")[
    if (if-meet-ball-speed = "no change")[move-in-collision]
    if (if-meet-ball-speed = "zero")[stop]
    if (if-meet-ball-speed = "increase")[move-in-collision]
    if (if-meet-ball-speed = "decrease")[move-in-collision]
    if (if-meet-ball-speed = "billiards")[ user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]
  ]

    if (if-meet-ball-heading = "billiards")[
    if (if-meet-ball-speed = "no change")[ user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]
    if (if-meet-ball-speed = "zero")[stop]
    if (if-meet-ball-speed = "increase")[ user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]
    if (if-meet-ball-speed = "decrease")[ user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]
    if (if-meet-ball-speed = "billiards")[check-for-collision]
  ]

 if (if-meet-ball-heading = "turn left")[  set heading heading - 5
    if (if-meet-ball-speed = "no change")[ set speed init-ball-speed move]
    if (if-meet-ball-speed = "zero")[stop]
    if (if-meet-ball-speed = "increase")[ set speed (init-ball-speed + 20) move]
    if (if-meet-ball-speed = "decrease")[  set speed (init-ball-speed - 20) move]
    if (if-meet-ball-speed = "billiards")[ user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]
  ]


 if (if-meet-ball-heading = "turn right")[set heading heading + 5
    if (if-meet-ball-speed = "no change")[ move]
    if (if-meet-ball-speed = "zero")[stop]
    if (if-meet-ball-speed = "increase")[ set speed (init-ball-speed + 20) move]
    if (if-meet-ball-speed = "decrease")[ set speed (init-ball-speed - 20) move]
    if (if-meet-ball-speed = "billiards")[ user-message (word "You cannot pair billiards heading change with non-billiard speed change, and vice versa.")]
  ]


end


 to check-for-collision  ;; ball procedure
  let candidate 0


  ;; Here we impose a rule that collisions only take place when there
  ;; are exactly two balls per patch.  We do this because when the
  ;; student introduces new balls from the side, we want them to
  ;; form a uniform wavefront.
  ;;
  ;; Why do we want a uniform wavefront?  Because it is actually more
  ;; realistic.  (And also because the curriculum uses the uniform
  ;; wavefront to help teach the relationship between ball collisions,
  ;; wall hits, and pressure.)
  ;;
  ;; Why is it realistic to assume a uniform wavefront?  Because in reality,
  ;; whether a collision takes place would depend on the actual headings
  ;; of the balls, not merely on their proximity.  Since the balls
  ;; in the wavefront have identical speeds and near-identical headings,
  ;; in reality they would not collide.  So even though the two-balls
  ;; rule is not itself realistic, it produces a realistic result.  Also,
  ;; unless the number of balls is extremely large, it is very rare
  ;; for three or more balls to land on the same patch (for example,
  ;; with 400 balls it happens less than 1% of the time).  So imposing
  ;; this additional rule should have only a negligible effect on the
  ;; aggregate behavior of the system.
  ;;
  ;; Why does this rule produce a uniform wavefront?  The balls all
  ;; start out on the same patch, which means that without the only-two
  ;; rule, they would all start colliding with each other immediately,
  ;; resulting in much random variation of speeds and headings.  With
  ;; the only-two rule, they are prevented from colliding with each other
  ;; until they have spread out a lot.  (And in fact, if you observe
  ;; the wavefront closely, you will see that it is not completely smooth,
  ;; because some collisions eventually do start occurring when it thins out while fanning.)

  if count other balls-here  = 1
  [
    ;; the following conditions are imposed on collision candidates:
    ;;   1. they must have a lower who number than my own, because collision
    ;;      code is asymmetrical: it must always happen from the point of view
    ;;      of just one ball.
    ;;   2. they must not be the same ball that we last collided with on
    ;;      this patch, so that we have a chance to leave the patch after we've
    ;;      collided with someone.
    set candidate one-of other balls-here with
      [who < [who] of myself and myself != last-collision ]
    ;; we also only collide if one of us has non-zero speed. It's useless
    ;; (and incorrect, actually) for two balls with zero speed to collide.
    if (candidate != nobody) and (speed > 0 or [speed] of candidate > 0)
    [
      collide-with candidate

      set last-collision candidate
      ask candidate [ set last-collision myself ]
    ]
  ]

end

;; implements a collision with another ball.
;;
;; THIS IS THE HEART OF THE PARTICLE SIMULATION, AND YOU ARE STRONGLY ADVISED
;; NOT TO CHANGE IT UNLESS YOU REALLY UNDERSTAND WHAT YOU'RE DOING!
;;
;; The two balls colliding are self and other-ball, and while the
;; collision is performed from the point of view of self, both balls are
;; modified to reflect its effects. This is somewhat complicated, so I'll
;; give a general outline here:
;;   1. Do initial setup, and determine the heading between ball centers
;;      (call it theta).
;;   2. Convert the representation of the velocity of each ball from
;;      speed/heading to a theta-based vector whose first component is the
;;      ball's speed along theta, and whose second component is the speed
;;      perpendicular to theta.
;;   3. Modify the velocity vectors to reflect the effects of the collision.
;;      This involves:
;;        a. computing the velocity of the center of mass of the whole system
;;           along direction theta
;;        b. updating the along-theta components of the two velocity vectors.
;;   4. Convert from the theta-based vector representation of velocity back to
;;      the usual speed/heading representation for each ball.
;;   5. Perform final cleanup and update derived quantities.

to collide-with [ other-ball ] ;; ball procedure
  let mass2 0
  let speed2 0
  let heading2 0
  let theta 0
  let v1t 0
  let v1l 0
  let v2t 0
  let v2l 0
  let vcm 0




  ;;; PHASE 1: initial setup

  ;; for convenience, grab some quantities from other-ball
  set mass2 [mass] of other-ball
  set speed2 [speed] of other-ball
  set heading2 [heading] of other-ball

  ;; since balls are modeled as zero-size points, theta isn't meaningfully
  ;; defined. we can assign it randomly without affecting the model's outcome.
  set theta (random-float 360)



  ;;; PHASE 2: convert velocities to theta-based vector representation

  ;; now convert my velocity from speed/heading representation to components
  ;; along theta and perpendicular to theta
  set v1t (speed * cos (theta - heading))
  set v1l (speed * sin (theta - heading))

  ;; do the same for other-ball
  set v2t (speed2 * cos (theta - heading2))
  set v2l (speed2 * sin (theta - heading2))



  ;;; PHASE 3: manipulate vectors to implement collision

  ;; compute the velocity of the system's center of mass along theta
  set vcm (((mass * v1t) + (mass2 * v2t)) / (mass + mass2) )

  ;; now compute the new velocity for each ball along direction theta.
  ;; velocity perpendicular to theta is unaffected by a collision along theta,
  ;; so the next two lines actually implement the collision itself, in the
  ;; sense that the effects of the collision are exactly the following changes
  ;; in ball velocity.
  set v1t (2 * vcm - v1t)
  set v2t (2 * vcm - v2t)



  ;;; PHASE 4: convert back to normal speed/heading

  ;; now convert my velocity vector into my new speed and heading
  set speed sqrt ((v1t * v1t) + (v1l * v1l))
  ;; if the magnitude of the velocity vector is 0, atan is undefined. but
  ;; speed will be 0, so heading is irrelevant anyway. therefore, in that
  ;; case we'll just leave it unmodified.
  if v1l != 0 or v1t != 0
    [ set heading (theta - (atan v1l v1t)) ]

  ;; and do the same for other-ball
  ask other-ball [
    set speed sqrt ((v2t ^ 2) + (v2l ^ 2))
    if v2l != 0 or v2t != 0
      [ set heading (theta - (atan v2l v2t)) ]
  ]


end

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GRAVITY;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

to update-variables
  set temperature 0
  set volume 0
  set outside-energy 0
  set lost-balls (number-of-balls-to-add - count balls)
  set percent-lost-balls (lost-balls / number-of-balls-to-add) * 100
  set avg-speed  mean [speed] of balls
  set avg-energy  mean [energy] of balls
end

to calculate-tick-advance-amount
  ;; tick-advance-amount is calculated in such way that even the fastest
  ;; ball will jump at most 1 patch length in a clock tick. As
  ;; balls jump (speed * tick-advance-amount) at every clock tick, making
  ;; tick length the inverse of the speed of the fastest ball
  ;; (1/max speed) assures that. Having each ball advance at most
  ;; one patch-length is necessary for it not to "jump over" a wall
  ;; or another ball.
  ifelse any? balls with [speed > 0]
    [ set tick-advance-amount 1 / (ceiling max [speed] of balls) ]
    [ set tick-advance-amount 1 ]
end

to move-in-gravity
  setxy (xcor + sin heading * speed * tick-advance-amount)
           (ycor + cos heading * speed * tick-advance-amount - gravity-acceleration *
           (0.5 * (tick-advance-amount ^ 2)))
  factor-gravity

  if (pycor >= max-pycor) [ die ]
end

to factor-gravity  ;; turtle procedure
  let vx (sin heading * speed)
  let vy (cos heading * speed) - (gravity-acceleration * tick-advance-amount)
  set speed sqrt ((vy ^ 2) + (vx ^ 2))
  set heading atan vx vy

  let new-patch patch-ahead 1
  let new-px [pxcor] of new-patch
  let new-py [pycor] of new-patch

  ;; if we're not about to hit a wall, we don't need to do any further checks
  if [pcolor] of new-patch != brown
    [ stop ]

  ;; if hitting the top or bottom, reflect heading around y axis
  if (new-py = max-pycor or new-py = min-pycor )
    [ set heading (180 - heading)]

  ask patch new-px new-py
  [ sprout-flashes 1 [
      set color [pcolor] of patch-here - 2
      set birthday ticks
      set heading 0
    ]
  ]
end

  to bounce-with-gravity  ;; ball procedure
  ;; get the coordinates of the patch we'll be on if we go forward 1
  let new-patch patch-ahead 1
  let new-px [pxcor] of new-patch
  let new-py [pycor] of new-patch
  ;; if we're not about to hit a wall, we don't need to do any further checks
  if [pcolor] of new-patch != brown
    [ stop ]
  ;; if hitting the bottom, reflect heading around y axis
  if (new-py = ( - box-edge))
    [ set heading (180 - heading)]
  ask patch new-px new-py [
    sprout-flashes 1 [
      set color [pcolor] of patch-here - 2
      set birthday ticks
    ]
  ]
end
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;STICK;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

to stick
  set stick-to-wall? true
        set leader self
  if pcolor = blue [set stuck-on-wall? true]

end

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;earser;;;;;;;;;;;;;;;

to erase
  let snap-xcor 0
  let snap-ycor 0
  let orig-xcor 0
  let orig-ycor 0
  let eraser-window-walls nobody
  let eraser-window-balls nobody
  ifelse mouse-down? [
        set orig-xcor mouse-xcor
        set orig-ycor mouse-ycor
        set snap-xcor round orig-xcor
        set snap-ycor round orig-ycor
        set-default-shape erasers "eraser"   ;; new

        create-erasers 1 [                  ;; new
           set hidden? true
           set pressure? true
           set size 3
           set color white
    ]
        ask patches with [ pxcor = snap-xcor and pycor = snap-ycor ] [

        set eraser-window-balls balls-on neighbors

        ask erasers [
          set hidden? false
          set shape "eraser"
          setxy orig-xcor orig-ycor
        ]

        set-ball-color
        ask eraser-window-balls [ die ]
      ]
  ]
  [ask erasers [set hidden? true]]
end

to set-ball-color
  if (background-color = "pink")  [set pcolor pink]
  if(background-color ="gray")    [set pcolor gray]
  if(background-color = "green")  [set pcolor green]
  if(background-color = "black")  [set pcolor black]
  if(background-color = "white")  [set pcolor white]
  if(background-color = "yellow") [set pcolor yellow]
end

to save-existing-layout
  reset-ticks
end

to open-existing-layout
  import-world user-file
end
@#$#@#$#@
GRAPHICS-WINDOW
521
16
984
480
-1
-1
8.6
1
10
1
1
1
0
1
1
1
-26
26
-26
26
0
0
1
ticks
30.0

TEXTBOX
17
10
167
35
Setup-Model
20
73.0
1

TEXTBOX
254
10
404
35
Run-Model
20
73.0
1

TEXTBOX
17
28
167
46
------------------------------
11
0.0
1

TEXTBOX
251
29
401
47
--------------------------
11
0.0
1

BUTTON
11
147
106
180
NIL
paint-brush
T
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

TEXTBOX
17
262
167
287
Properties
20
24.0
1

SLIDER
15
226
199
259
number-of-balls-to-add
number-of-balls-to-add
1
100
29.0
1
1
NIL
HORIZONTAL

CHOOSER
14
293
180
338
balls-Size
balls-Size
0.5 1 1.5 2 2.5
1

CHOOSER
15
341
180
386
balls-color
balls-color
"pink" "red" "green" "black" "white" "orange"
4

TEXTBOX
230
357
380
382
Fields
20
24.0
1

CHOOSER
193
395
495
440
if-field-is-on-increase-speed-in-it's-direction
if-field-is-on-increase-speed-in-it's-direction
"none" "top to bottom" "right to left"
0

TEXTBOX
245
46
395
71
Actions
20
24.0
1

CHOOSER
16
382
180
427
init-heading
init-heading
"random" "left" "right" "up" "down"
0

SLIDER
16
431
178
464
init-ball-speed
init-ball-speed
1
50
19.0
1
1
NIL
HORIZONTAL

TEXTBOX
233
142
383
167
Interactions
20
24.0
1

TEXTBOX
235
169
385
187
interactions with walls
11
104.0
1

TEXTBOX
237
260
387
288
interactions with\nother balls
11
104.0
1

BUTTON
636
489
726
522
clear-all
clear-all\n\n
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

BUTTON
529
487
625
520
play
go
T
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

BUTTON
112
187
209
220
place-balls
place-balls
T
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

CHOOSER
5
52
206
97
background-color
background-color
"pink" "yellow" "green" "gray" "white" "black"
5

BUTTON
736
490
828
523
clear-balls
ask turtles [die]
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

BUTTON
10
99
107
132
paint-world
ask patches [paint-world]
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

TEXTBOX
539
231
689
259
NIL
11
0.0
1

BUTTON
11
185
106
220
to-erase
erase
T
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

SWITCH
14
470
137
503
trace?
trace?
1
1
-1000

BUTTON
113
148
199
181
NIL
place-box
T
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

CHOOSER
227
196
357
241
if-hit-wall-heading
if-hit-wall-heading
"no change" "trun left" "turn right" "billiards"
0

CHOOSER
362
196
506
241
if-hit-wall-speed
if-hit-wall-speed
"no change" "zero" "increase" "decrease" "billiards"
0

CHOOSER
208
294
362
339
if-meet-ball-heading
if-meet-ball-heading
"no change" "trun left" "turn right" "billiards"
0

CHOOSER
370
294
504
339
if-meet-ball-speed
if-meet-ball-speed
"no change" "zero" "increase" "decrease" "billiards"
0

CHOOSER
230
85
430
130
every-step-move
every-step-move
"forward the same speed" "forward slower" "forward faster"
0

@#$#@#$#@
## WHAT IS IT?

(a general understanding of what the model is trying to show or explain)

## HOW IT WORKS

(what rules the agents use to create the overall behavior of the model)

## HOW TO USE IT

(how to use the model, including a description of each of the items in the Interface tab)

## THINGS TO NOTICE

(suggested things for the user to notice while running the model)

## THINGS TO TRY

(suggested things for the user to try to do (move sliders, switches, etc.) with the model)

## EXTENDING THE MODEL

(suggested things to add or change in the Code tab to make the model more complicated, detailed, accurate, etc.)

## NETLOGO FEATURES

(interesting or unusual features of NetLogo that the model uses, particularly in the Code tab; or where workarounds were needed for missing features)

## RELATED MODELS

(models in the NetLogo Models Library and elsewhere which are of related interest)

## CREDITS AND REFERENCES

(a reference to the model's URL on the web if it has one, as well as any other necessary credits, citations, and links)
@#$#@#$#@
default
true
0
Polygon -7500403 true true 150 5 40 250 150 205 260 250

airplane
true
0
Polygon -7500403 true true 150 0 135 15 120 60 120 105 15 165 15 195 120 180 135 240 105 270 120 285 150 270 180 285 210 270 165 240 180 180 285 195 285 165 180 105 180 60 165 15

arrow
true
0
Polygon -7500403 true true 150 0 0 150 105 150 105 293 195 293 195 150 300 150

box
false
0
Polygon -7500403 true true 150 285 285 225 285 75 150 135
Polygon -7500403 true true 150 135 15 75 150 15 285 75
Polygon -7500403 true true 15 75 15 225 150 285 150 135
Line -16777216 false 150 285 150 135
Line -16777216 false 150 135 15 75
Line -16777216 false 150 135 285 75

bug
true
0
Circle -7500403 true true 96 182 108
Circle -7500403 true true 110 127 80
Circle -7500403 true true 110 75 80
Line -7500403 true 150 100 80 30
Line -7500403 true 150 100 220 30

butterfly
true
0
Polygon -7500403 true true 150 165 209 199 225 225 225 255 195 270 165 255 150 240
Polygon -7500403 true true 150 165 89 198 75 225 75 255 105 270 135 255 150 240
Polygon -7500403 true true 139 148 100 105 55 90 25 90 10 105 10 135 25 180 40 195 85 194 139 163
Polygon -7500403 true true 162 150 200 105 245 90 275 90 290 105 290 135 275 180 260 195 215 195 162 165
Polygon -16777216 true false 150 255 135 225 120 150 135 120 150 105 165 120 180 150 165 225
Circle -16777216 true false 135 90 30
Line -16777216 false 150 105 195 60
Line -16777216 false 150 105 105 60

car
false
0
Polygon -7500403 true true 300 180 279 164 261 144 240 135 226 132 213 106 203 84 185 63 159 50 135 50 75 60 0 150 0 165 0 225 300 225 300 180
Circle -16777216 true false 180 180 90
Circle -16777216 true false 30 180 90
Polygon -16777216 true false 162 80 132 78 134 135 209 135 194 105 189 96 180 89
Circle -7500403 true true 47 195 58
Circle -7500403 true true 195 195 58

circle
false
0
Circle -7500403 true true 0 0 300

circle 2
false
0
Circle -7500403 true true 0 0 300
Circle -16777216 true false 30 30 240

cow
false
0
Polygon -7500403 true true 200 193 197 249 179 249 177 196 166 187 140 189 93 191 78 179 72 211 49 209 48 181 37 149 25 120 25 89 45 72 103 84 179 75 198 76 252 64 272 81 293 103 285 121 255 121 242 118 224 167
Polygon -7500403 true true 73 210 86 251 62 249 48 208
Polygon -7500403 true true 25 114 16 195 9 204 23 213 25 200 39 123

cylinder
false
0
Circle -7500403 true true 0 0 300

dot
false
0
Circle -7500403 true true 90 90 120

eraser
false
0
Rectangle -7500403 true true 0 0 300 360
Rectangle -7500403 true true 0 0 300 375

face happy
false
0
Circle -7500403 true true 8 8 285
Circle -16777216 true false 60 75 60
Circle -16777216 true false 180 75 60
Polygon -16777216 true false 150 255 90 239 62 213 47 191 67 179 90 203 109 218 150 225 192 218 210 203 227 181 251 194 236 217 212 240

face neutral
false
0
Circle -7500403 true true 8 7 285
Circle -16777216 true false 60 75 60
Circle -16777216 true false 180 75 60
Rectangle -16777216 true false 60 195 240 225

face sad
false
0
Circle -7500403 true true 8 8 285
Circle -16777216 true false 60 75 60
Circle -16777216 true false 180 75 60
Polygon -16777216 true false 150 168 90 184 62 210 47 232 67 244 90 220 109 205 150 198 192 205 210 220 227 242 251 229 236 206 212 183

fish
false
0
Polygon -1 true false 44 131 21 87 15 86 0 120 15 150 0 180 13 214 20 212 45 166
Polygon -1 true false 135 195 119 235 95 218 76 210 46 204 60 165
Polygon -1 true false 75 45 83 77 71 103 86 114 166 78 135 60
Polygon -7500403 true true 30 136 151 77 226 81 280 119 292 146 292 160 287 170 270 195 195 210 151 212 30 166
Circle -16777216 true false 215 106 30

flag
false
0
Rectangle -7500403 true true 60 15 75 300
Polygon -7500403 true true 90 150 270 90 90 30
Line -7500403 true 75 135 90 135
Line -7500403 true 75 45 90 45

flower
false
0
Polygon -10899396 true false 135 120 165 165 180 210 180 240 150 300 165 300 195 240 195 195 165 135
Circle -7500403 true true 85 132 38
Circle -7500403 true true 130 147 38
Circle -7500403 true true 192 85 38
Circle -7500403 true true 85 40 38
Circle -7500403 true true 177 40 38
Circle -7500403 true true 177 132 38
Circle -7500403 true true 70 85 38
Circle -7500403 true true 130 25 38
Circle -7500403 true true 96 51 108
Circle -16777216 true false 113 68 74
Polygon -10899396 true false 189 233 219 188 249 173 279 188 234 218
Polygon -10899396 true false 180 255 150 210 105 210 75 240 135 240

house
false
0
Rectangle -7500403 true true 45 120 255 285
Rectangle -16777216 true false 120 210 180 285
Polygon -7500403 true true 15 120 150 15 285 120
Line -16777216 false 30 120 270 120

leaf
false
0
Polygon -7500403 true true 150 210 135 195 120 210 60 210 30 195 60 180 60 165 15 135 30 120 15 105 40 104 45 90 60 90 90 105 105 120 120 120 105 60 120 60 135 30 150 15 165 30 180 60 195 60 180 120 195 120 210 105 240 90 255 90 263 104 285 105 270 120 285 135 240 165 240 180 270 195 240 210 180 210 165 195
Polygon -7500403 true true 135 195 135 240 120 255 105 255 105 285 135 285 165 240 165 195

line
true
0
Line -7500403 true 150 0 150 300

line half
true
0
Line -7500403 true 150 0 150 150

pentagon
false
0
Polygon -7500403 true true 150 15 15 120 60 285 240 285 285 120

person
false
0
Circle -7500403 true true 110 5 80
Polygon -7500403 true true 105 90 120 195 90 285 105 300 135 300 150 225 165 300 195 300 210 285 180 195 195 90
Rectangle -7500403 true true 127 79 172 94
Polygon -7500403 true true 195 90 240 150 225 180 165 105
Polygon -7500403 true true 105 90 60 150 75 180 135 105

plant
false
0
Rectangle -7500403 true true 135 90 165 300
Polygon -7500403 true true 135 255 90 210 45 195 75 255 135 285
Polygon -7500403 true true 165 255 210 210 255 195 225 255 165 285
Polygon -7500403 true true 135 180 90 135 45 120 75 180 135 210
Polygon -7500403 true true 165 180 165 210 225 180 255 120 210 135
Polygon -7500403 true true 135 105 90 60 45 45 75 105 135 135
Polygon -7500403 true true 165 105 165 135 225 105 255 45 210 60
Polygon -7500403 true true 135 90 120 45 150 15 180 45 165 90

sheep
false
15
Circle -1 true true 203 65 88
Circle -1 true true 70 65 162
Circle -1 true true 150 105 120
Polygon -7500403 true false 218 120 240 165 255 165 278 120
Circle -7500403 true false 214 72 67
Rectangle -1 true true 164 223 179 298
Polygon -1 true true 45 285 30 285 30 240 15 195 45 210
Circle -1 true true 3 83 150
Rectangle -1 true true 65 221 80 296
Polygon -1 true true 195 285 210 285 210 240 240 210 195 210
Polygon -7500403 true false 276 85 285 105 302 99 294 83
Polygon -7500403 true false 219 85 210 105 193 99 201 83

square
false
0
Rectangle -7500403 true true 30 30 270 270

square 2
false
0
Rectangle -7500403 true true 30 30 270 270
Rectangle -16777216 true false 60 60 240 240

star
false
0
Polygon -7500403 true true 151 1 185 108 298 108 207 175 242 282 151 216 59 282 94 175 3 108 116 108

target
false
0
Circle -7500403 true true 0 0 300
Circle -16777216 true false 30 30 240
Circle -7500403 true true 60 60 180
Circle -16777216 true false 90 90 120
Circle -7500403 true true 120 120 60

tree
false
0
Circle -7500403 true true 118 3 94
Rectangle -6459832 true false 120 195 180 300
Circle -7500403 true true 65 21 108
Circle -7500403 true true 116 41 127
Circle -7500403 true true 45 90 120
Circle -7500403 true true 104 74 152

triangle
false
0
Polygon -7500403 true true 150 30 15 255 285 255

triangle 2
false
0
Polygon -7500403 true true 150 30 15 255 285 255
Polygon -16777216 true false 151 99 225 223 75 224

truck
false
0
Rectangle -7500403 true true 4 45 195 187
Polygon -7500403 true true 296 193 296 150 259 134 244 104 208 104 207 194
Rectangle -1 true false 195 60 195 105
Polygon -16777216 true false 238 112 252 141 219 141 218 112
Circle -16777216 true false 234 174 42
Rectangle -7500403 true true 181 185 214 194
Circle -16777216 true false 144 174 42
Circle -16777216 true false 24 174 42
Circle -7500403 false true 24 174 42
Circle -7500403 false true 144 174 42
Circle -7500403 false true 234 174 42

turtle
true
0
Polygon -10899396 true false 215 204 240 233 246 254 228 266 215 252 193 210
Polygon -10899396 true false 195 90 225 75 245 75 260 89 269 108 261 124 240 105 225 105 210 105
Polygon -10899396 true false 105 90 75 75 55 75 40 89 31 108 39 124 60 105 75 105 90 105
Polygon -10899396 true false 132 85 134 64 107 51 108 17 150 2 192 18 192 52 169 65 172 87
Polygon -10899396 true false 85 204 60 233 54 254 72 266 85 252 107 210
Polygon -7500403 true true 119 75 179 75 209 101 224 135 220 225 175 261 128 261 81 224 74 135 88 99

wheel
false
0
Circle -7500403 true true 3 3 294
Circle -16777216 true false 30 30 240
Line -7500403 true 150 285 150 15
Line -7500403 true 15 150 285 150
Circle -7500403 true true 120 120 60
Line -7500403 true 216 40 79 269
Line -7500403 true 40 84 269 221
Line -7500403 true 40 216 269 79
Line -7500403 true 84 40 221 269

wolf
false
0
Polygon -16777216 true false 253 133 245 131 245 133
Polygon -7500403 true true 2 194 13 197 30 191 38 193 38 205 20 226 20 257 27 265 38 266 40 260 31 253 31 230 60 206 68 198 75 209 66 228 65 243 82 261 84 268 100 267 103 261 77 239 79 231 100 207 98 196 119 201 143 202 160 195 166 210 172 213 173 238 167 251 160 248 154 265 169 264 178 247 186 240 198 260 200 271 217 271 219 262 207 258 195 230 192 198 210 184 227 164 242 144 259 145 284 151 277 141 293 140 299 134 297 127 273 119 270 105
Polygon -7500403 true true -1 195 14 180 36 166 40 153 53 140 82 131 134 133 159 126 188 115 227 108 236 102 238 98 268 86 269 92 281 87 269 103 269 113

x
false
0
Polygon -7500403 true true 270 75 225 30 30 225 75 270
Polygon -7500403 true true 30 75 75 30 270 225 225 270
@#$#@#$#@
NetLogo 6.0.2
@#$#@#$#@
@#$#@#$#@
@#$#@#$#@
@#$#@#$#@
@#$#@#$#@
default
0.0
-0.2 0 0.0 1.0
0.0 1 1.0 0.0
0.2 0 0.0 1.0
link direction
true
0
Line -7500403 true 150 150 90 180
Line -7500403 true 150 150 210 180
@#$#@#$#@
0
@#$#@#$#@
