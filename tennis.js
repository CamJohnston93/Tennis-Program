var names = "jack matches jill";
var nospaces = names.replace(/\s/g, "");

var output = [];
var newObj = [];

for (var i = 0; i < nospaces.length; i++) {
  var ch = nospaces.charAt(i);
  var count = output[ch]
  output[ch] = count ? count + 1 : 1;
}
const outputValues = Object.values(output);

function matchMaker(outputValues) {

  if (outputValues.length % 2 === 0) {
    for (var i = 0; i < outputValues.length / 2; i++) {
      let first = outputValues[i];
      let last = outputValues[outputValues.length - 1 - i];
      const sum = first + last;
      newObj.push(sum);
    }
  } else {
    for (var i = 0; i < outputValues.length / 2; i++) {
      let first = outputValues[i];
      let last = outputValues[outputValues.length - 1 - i];
      const sum = first + last;
      newObj.push(sum);
    }
    newObj.pop();
    var middle = outputValues[Math.floor(outputValues.length / 2)];
    newObj.push(middle)
  }

  for (var doubleDigits = 0; doubleDigits < newObj.length; doubleDigits++) {
    if (newObj[doubleDigits] >= 10) {
      let splitDouble = newObj[doubleDigits].toString().split("").map(Number);
      let doubleIndex = newObj.indexOf(newObj[doubleDigits]);
      newObj[doubleIndex] = splitDouble;
    }
  }

  outputValues = newObj.flat();
  newObj = [];

  if (outputValues.length === 2) {
    return outputValues;
  }

  return matchMaker(outputValues);

}

var arrayOfTwoElements = matchMaker(outputValues);

function goodMatch(asd) {
  let joinNumbers = asd.join("");
  if (parseInt(joinNumbers) >= 80) {
    let matchResult = names.concat(" - ", joinNumbers, "%", " : Good Match!");
    console.log(matchResult);
  } else {
    let matchResult1 = names.concat(" - ", joinNumbers, "%");
    console.log(matchResult1);
  }
}

var result = goodMatch(arrayOfTwoElements);
