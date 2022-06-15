export const MajorColorNames = ["WHITE", "RED", "BLACK", "YELLOW", "VIOLET"];
export const MinorColorNames = ["BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"];

class ColorPair {
  constructor() {
    this.majorColor;
    this.minorColor;
  }
}

ColorPair.prototype.toString = function () {
  return `MajorColor:${this.majorColor},MinorColor:${this.minorColor}`;
};

export { ColorPair };
