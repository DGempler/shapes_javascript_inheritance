var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("area", function() {
    it("should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });

  describe("perimeter", function() {
    it("should be 0 for this abstract shape", function() {
      expect(shape.perimeter()).toEqual(0);
    });
  });

  describe("draw", function() {
    it("should return an assci version of this abstract shape", function() {
      expect(shape.draw()).toEqual("A shape with 1 sides");
    });
  });

  describe("toString", function() {
    it("should return a string describing the shape ", function() {
      expect(shape.toString()).toEqual("[Shape sides: 1, color:red ]");
    });
  });

  describe("getRGB", function() {
    it("should return the rgb value (as a string) of the shape's color", function() {
      expect(shape.getRGB()).toEqual("rgb(255,0,0)");
    });
  });

});
