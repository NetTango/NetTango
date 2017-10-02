/*
 * NetTango
 *
 * Michael S. Horn
 * Northwestern University
 * michael-horn@northwestern.edu
 * Copyright 2016, Michael S. Horn
 *
 * This project was funded by the National Science Foundation (grant DRL-1612619).
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */
part of NetTango;


/**
 * Affine transform matrix (row major order)
 */
class Matrix2D {
  
  List<double> xform = [ 1.0, 0.0, 0.0,
                         0.0, 1.0, 0.0,
                         0.0, 0.0, 1.0 ];

   
/**
 * Initializes as a 3x3 in row major order
 */
  Matrix2D(num m11, num m12, num m13, num m21, num m22, num m23, num m31, num m32, num m33) {
    xform[0] = m11;
    xform[1] = m21;
    xform[2] = m31;
    xform[3] = m12;
    xform[4] = m22;
    xform[5] = m32;
    xform[6] = m13;
    xform[7] = m23;
    xform[8] = m33;
  }


  Matrix2D.identity();


  Matrix2D.scaleMatrix(num sx, num sy) {
    xform = [ sx, 0.0, 0.0, 
              0.0, sy, 0.0,
              0.0, 0.0, 1.0 ];
  }


  Matrix2D.translateMatrix(num dx, num dy) {
    xform = [ 1.0, 0.0, dx, 
              0.0, 1.0, dy,
              0.0, 0.0, 1.0 ];
  }


/**
 * Creates a copy of the given matrix
 */
  Matrix2D.copy(Matrix2D origin) {
    for (int i=0; i<9; i++) xform[i] = origin.xform[i];
  }


  void reset() {
    xform = [ 1.0, 0.0, 0.0,
              0.0, 1.0, 0.0,
              0.0, 0.0, 1.0 ];
  }
  
  
/**
 * Creates the inverse of the given matrix
 */
  Matrix2D invert() {
    Matrix2D i = new Matrix2D.identity();
    List<double> m = xform;
    double det = determinant;
    if (det == 0.0) return i;
    double invDet = 1.0 / det;
    i.xform[0] = invDet * (m[4] * m[8] - m[7] * m[5]);
    i.xform[3] = invDet * (m[6] * m[5] - m[3] * m[8]);
    i.xform[6] = invDet * (m[3] * m[7] - m[6] * m[4]);
    i.xform[1] = invDet * (m[7] * m[2] - m[1] * m[8]);
    i.xform[4] = invDet * (m[0] * m[8] - m[6] * m[2]);
    i.xform[7] = invDet * (m[6] * m[1] - m[0] * m[7]);
    i.xform[2] = invDet * (m[1] * m[5] - m[4] * m[2]);
    i.xform[5] = invDet * (m[3] * m[2] - m[0] * m[5]);
    i.xform[8] = invDet * (m[0] * m[4] - m[3] * m[1]);
    return i;
  }


/** 
 * Multiplies two matrices with this matrix on the left side.
 * Saves result in this matrix
 */
  void multiply(Matrix2D right) {
    Matrix2D n = new Matrix2D.identity();
    n.xform[0] = xform[0] * right.xform[0] + xform[1] * right.xform[3] + xform[2] * right.xform[6]; // 1, 1 row
    n.xform[1] = xform[0] * right.xform[1] + xform[1] * right.xform[4] + xform[2] * right.xform[7]; // 2, 1
    n.xform[2] = xform[0] * right.xform[2] + xform[1] * right.xform[5] + xform[2] * right.xform[8]; // 3, 1
    n.xform[3] = xform[3] * right.xform[0] + xform[4] * right.xform[3] + xform[5] * right.xform[6]; // 1, 2
    n.xform[4] = xform[3] * right.xform[1] + xform[4] * right.xform[4] + xform[5] * right.xform[7]; // 2, 2
    n.xform[5] = xform[3] * right.xform[2] + xform[4] * right.xform[5] + xform[5] * right.xform[8]; // 3, 2
    n.xform[6] = xform[6] * right.xform[0] + xform[7] * right.xform[3] + xform[8] * right.xform[6]; // 1, 3
    n.xform[7] = xform[6] * right.xform[1] + xform[7] * right.xform[4] + xform[8] * right.xform[7]; // 2, 3
    n.xform[8] = xform[6] * right.xform[2] + xform[7] * right.xform[5] + xform[8] * right.xform[8]; // 3, 3
    for (int i=0; i<9; i++) xform[i] = n.xform[i];
  }  
  
  
  double get determinant {
    double x = xform[0]*((xform[4]*xform[8])-(xform[7]*xform[5]));
    double y = xform[3]*((xform[1]*xform[8])-(xform[7]*xform[2]));
    double z = xform[6]*((xform[1]*xform[5])-(xform[4]*xform[2]));
    return x - y + z;
  }
  
  
  void setTransform(num m11, num m12, num m21, num m22, num dx, num dy) {
    xform[0] = m11;
    xform[1] = m21; //m12;
    xform[2] = dx;
    xform[3] = m12; //m21;
    xform[4] = m22;
    xform[5] = dy;
    xform[6] = 0.0;
    xform[7] = 0.0;
    xform[8] = 1.0;
  }


  void scale(num sx, num sy) {
    multiply(new Matrix2D.scaleMatrix(sx, sy));
  }


  void scaleAroundPoint(num sx, num sy, num cx, num cy) {
    translate(cx, cy);
    scale(sx, sy);
    translate(-cx, -cy);
  }


  void translate(num dx, num dy) {
    multiply(new Matrix2D.translateMatrix(dx, dy));
  }


  void transformContact(Contact c) {
    double tx = c.touchX * xform[0] + c.touchY * xform[1] + xform[2];
    double ty = c.touchX * xform[3] + c.touchY * xform[4] + xform[5];
    c.touchX = tx;
    c.touchY = ty;
  }
  
  
  num transformTheta(num theta) {
    return theta + asin(xform[3]);
  }
  
  
  num transformX(num x, num y) {
    return x * xform[0] + y * xform[1] + xform[2];
  }
  
  
  num transformY(num x, num y) {
    return x * xform[3] + y * xform[4] + xform[5];
  }
  
  
  void transformContext(CanvasRenderingContext2D ctx) {
    ctx.transform(xform[0], xform[3], xform[1], xform[4], xform[2], xform[5]);
  }
}
