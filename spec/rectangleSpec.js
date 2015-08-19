var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4,6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a square with side lengths 4,6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
  });

  describe("draw", function() {
    it("should return an assci version of this abstract shape", function() {
      expect(rectangle.draw()).toEqual(
        "\n"+
        " _____________\n"+
        "| * * * * * * |\n"+
        "| * * * * * * |\n"+
        "| * * * * * * |\n"+
        "| * * * * * * |\n"+
        " -------------\n"+
        "");
    });
  });

  describe("toString", function() {
    it("should return a string describing the rectangle ", function() {
      expect(rectangle.toString()).toEqual("[Shape sides: 4, color:blue ]");
    });
  });

  describe("getRGB", function() {
    it("should return the rgb value (as a string) of the rectangle's color", function() {
      expect(rectangle.getRGB()).toEqual("rgb(0,0,255)");
    });
  });
  // Write more specs!!
});
