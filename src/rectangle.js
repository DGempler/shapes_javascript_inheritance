var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.
function Rectangle(sideLength, sideWidth, color) { // TODO: THIS IS JUST A PLACE HOLDER, PLEASE CHANGE.
  Shape.call(this, 4, color);
  this.sideLength = sideLength;
  this.sideWidth = sideWidth;
  this.area = function() {
    return this.sideLength * this.sideWidth;
  };
  this.perimeter = function() {
    return this.sideLength * 2 + this.sideWidth * 2;
  };
  this.draw = function() {
    var drawing = "\n _";
    for (var i = 0; i < this.sideLength; i++) {
      for (var j = 0; j < this.sideWidth; j++) {
        drawing += "__";
      }
      drawing += "\n";
      for (var k = 0; k < this.sideLength; k++) {
        drawing += "| ";
        for (var l = 0; l < this.sideWidth; l++) {
          drawing += "* ";
        }
        drawing += "|\n";
      }
      drawing += " -";
      for (var m = 0; m < this.sideWidth; m++) {
        drawing += "--";
      }
      drawing += "\n";
      return drawing;
    }
  };
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

module.exports = Rectangle;


/*
 ________
| * * * |
| * * * |
| * * * |
 -------


function Draw(sideLength, sideWidth) {
  var drawing = "\n _";
  for (var i = 0; i < sideLength; i++) {
    for (var j = 0; j < sideWidth; j++) {
      drawing += "__";
    }
    drawing += "\n";
    for (var k = 0; k < sideLength; k++) {
      drawing += "| ";
      for (var l = 0; l < sideWidth; l++) {
        drawing += "* ";
      }
      drawing += "|\n";
    }
    drawing += " -";
    for (var m = 0; m < sideWidth; m++) {
      drawing += "--";
    }
    drawing += "\n";
    return drawing;
  }
}

*/
