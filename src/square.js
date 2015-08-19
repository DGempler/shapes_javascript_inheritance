var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(this, 4, color);
  this.sideLength = sideLength;
  this.area = function() {
    return this.sideLength * this.sideLength;
  };
  this.perimeter = function() {
    return this.sideLength * 4;
  };
  this.draw = function() {
    var drawing = "\n _";
    for (var i = 0; i < this.sideLength; i++) {
      for (var j = 0; j < this.sideLength; j++) {
        drawing += "__";
      }
      drawing += "\n";
      for (var k = 0; k < this.sideLength; k++) {
        drawing += "| ";
        for (var l = 0; l < this.sideLength; l++) {
          drawing += "* ";
        }
        drawing += "|\n";
      }
      drawing += " -";
      for (var m = 0; m < this.sideLength; m++) {
        drawing += "--";
      }
      drawing += "\n";
      return drawing;
    }
  };
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

module.exports = Square;



/*
 ________
| * * * |
| * * * |
| * * * |
 -------


function Draw(sideLength) {
  var drawing = "\n _";
  for (var i = 0; i < sideLength; i++) {
    for (var j = 0; j < sideLength; j++) {
      drawing += "__";
    }
    drawing += "\n";
    for (var k = 0; k < sideLength; k++) {
      drawing += "| ";
      for (var l = 0; l < sideLength; l++) {
        drawing += "* ";
      }
      drawing += "|\n";
    }
    drawing += " -";
    for (var m = 0; m < sideLength; m++) {
      drawing += "--";
    }
    drawing += "\n";
    return drawing;
  }
}

*/
