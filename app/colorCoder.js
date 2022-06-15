import { getColorPairFromNumber } from "./utils/colorPair";
import { getNumberFromColorPair } from "./utils/pairNumber";
import { ColorPair } from "./utils/colorNameConstants";

function checkColorPairForNumbers(pairNumber, expectedMajor, expectedMinor) {
  let testPair = getColorPairFromNumber(pairNumber);
  console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair}`);
  console.assert(testPair.majorColor == expectedMajor);
  console.assert(testPair.minorColor == expectedMinor);
}

function checkNumberForColorPairs(majorColor, minorColor, expectedPairNumber) {
  let testPair = new ColorPair();
  testPair.majorColor = majorColor;
  testPair.minorColor = minorColor;
  let pairNumber = getNumberFromColorPair(testPair);
  console.log(`[In]Colors: ${testPair}, [Out] PairNumber: ${pairNumber}`);
  console.assert(pairNumber == expectedPairNumber);
}

function test() {
    checkColorPairForNumbers(4, "WHITE", "BROWN");
    checkColorPairForNumbers(5, "WHITE", "SLATE");
    checkColorPairForNumbers(23, "VIOLET", "GREEN");
    checkNumberForColorPairs("YELLOW", "GREEN", 18);
    checkNumberForColorPairs("RED", "BLUE", 6);
}
test();
