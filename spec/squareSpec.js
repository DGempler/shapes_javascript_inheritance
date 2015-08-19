var Square = require("../src/square");

var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
  });

  describe("draw", function() {
    it("should return an assci version of this abstract shape", function() {
      expect(square.draw()).toEqual(
        "\n"+
        " _____\n"+
        "| * * |\n"+
        "| * * |\n"+
        " -----\n"+
        "");
    });
  });

  describe("toString", function() {
    it("should return a string describing the square ", function() {
      expect(square.toString()).toEqual("[Shape sides: 4, color:red ]");
    });
  });

  describe("getRGB", function() {
    it("should return the rgb value (as a string) of the square's color", function() {
      expect(square.getRGB()).toEqual("rgb(255,0,0)");
    });
  });
});
