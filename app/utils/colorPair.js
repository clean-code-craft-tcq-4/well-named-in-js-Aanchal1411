import { MajorColorNames, MinorColorNames } from "./colorNameConstants.js";
import { ColorPair } from "./colorNameConstants.js";
function getColorPairFromNumber(pairNumber) {
  let minorSize = MajorColorNames.length;
  let majorSize = MinorColorNames.length;

  if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
    throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
  }
  let zeroBasedPairNumber = pairNumber - 1;
  let majorIndex = parseInt(zeroBasedPairNumber / minorSize);
  let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
  let colorPairObj = new ColorPair();
  colorPairObj.majorColor = MajorColorNames[majorIndex];
  colorPairObj.minorColor = MinorColorNames[minorIndex];
  return colorPairObj;
}

export { getColorPairFromNumber };
