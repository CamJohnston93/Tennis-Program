var names = "jack matches jill";
var nospaces = names.replace(/\s/g, "");


var output = [];

for (var i = 0; i < nospaces.length; i++) {
  var ch = nospaces.charAt(i);
  var count = output[ch]
  output[ch] = count ? count + 1 : 1;
}
const outputValues = Object.values(output);
console.log(outputValues);



function matchMaker (){
  var newObj = []
  if (outputValues.length % 2 === 0) {
    for (var i = 0; i < outputValues.length / 2; i++) {
      const first = outputValues[i];
      const last = outputValues[outputValues.length - 1 - i];
      console.log("Even number of elements");
      const sum = first + last;
      newObj.push(sum);
    }
  } else {
    for (var i = 0; i < outputValues.length / 2; i++) {
      const first = outputValues[i];
      const last = outputValues[outputValues.length - 1 - i];
      console.log("odd number of elements");
      const sum = first + last;
      newObj.push(sum);
    }
    newObj.pop();
    var middle = outputValues[Math.floor(outputValues.length / 2)];
    newObj.push(middle)
  }
  return newObj;
}

console.log(matchMaker());
