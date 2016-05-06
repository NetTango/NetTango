/*
 * Frog Pond Evolution
 * Copyright (c) 2013 Michael S. Horn
 * 
 *           Michael S. Horn (michael-horn@northwestern.edu)
 *           Northwestern University
 *           2120 Campus Drive
 *           Evanston, IL 60613
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License (version 2) as
 * published by the Free Software Foundation.
 * 
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 */
part of FrogPond2;


class PageManager {
  
  // current page
  int curr_page = 0;

  // list of page ids
  List<String> pages;

  
  PageManager() {
    
    // init page list
    pages = new List<String>();
    var pagelist = querySelectorAll(".page");
    for (Element page in pagelist) {
      pages.add(page.id);
    }
    
    bindClickEvents("home-button", (e) => homePage());
    bindClickEvents("next-button", (e) => nextPage());
    bindClickEvents("back-button", (e) => prevPage());
  }
  
  
//-------------------------------------------------------------------------
// Go to an arbitrary page
//-------------------------------------------------------------------------
  void gotoPage(String id) {
    int i = 0;
    var pagelist = querySelectorAll(".page");
    for (Element page in pagelist) {
      if (page.id == id) {
        print(page.id);
        page.style.zIndex = "1";
        page.style.opacity = "1.0";
        curr_page = i;
      } else {
        page.style.zIndex = "0";
        page.style.opacity = "0.0";
      }
      i++;
    }
    /*
    Element el = querySelector("#${id}");
    if (el != null) {
      el.style.animation = "slidein-left 0.5s ease-in 0 1";
      el.style.left = "0px";
    }
    */
    //Logging.logEvent("goto-page", id);
  }
  
  
//-------------------------------------------------------------------------
// slide page onto the screen
//-------------------------------------------------------------------------
/*
  void slidePageIn(String id, bool left) {
    loadPage(id);
    Element el = querySelector("#${id}");
    if (left) {
      el.style.animation = "slidein-left 0.5s ease-in-out 0 1";
      el.style.left = "0px";
    } else {
      el.style.animation = "slidein-right 0.5s ease-in-out 0 1";
      el.style.left = "0px";
    }
  }
  */
  
//-------------------------------------------------------------------------
// slide page off of the screen
//-------------------------------------------------------------------------
/*
  void slidePageOut(String id, bool left) {
    Element el = querySelector("#${id}");
    if (left) {
      el.style.animation = "slideout-left 0.5s ease-in-out 0 1";
      el.style.left = "-1050px";
    } else {
      el.style.animation = "slideout-right 0.5s ease-in-out 0 1";
      el.style.left = "1050px";
    }
  }
  */
  
//-------------------------------------------------------------------------
// Advance to the next page
//-------------------------------------------------------------------------
  void nextPage() {
    int p0 = curr_page;
    int p1 = (p0 + 1) % pages.length;
    
    //slidePageOut(pages[p0], true);
    //slidePageIn(pages[p1], true);
    gotoPage(pages[p1]);
    curr_page = p1;
  }
  
  
//-------------------------------------------------------------------------
// Back to the previous page
//-------------------------------------------------------------------------
  void prevPage() {
    int p0 = curr_page;
    int p1 = p0 - 1;
    if (p1 < 0) p1 = pages.length - 1;
    //slidePageOut(pages[p0], false);
    //slidePageIn(pages[p1], false);
    gotoPage(pages[p1]);
    curr_page = p1;
  }
  
  
  void homePage() {
    curr_page = 0;
    gotoPage("splash-page");
    model.setup();
  }
}
