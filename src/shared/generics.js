var myArray = [1, 2, 3];
var vaiable = myArray[0];
var ab = myArray.map(function (item) { return "".concat(item); });
console.log(ab);
function identity(arg) {
    return arg;
}
var result = identity(12);
function getLength(arr) {
    return arr.length;
}
var lenArray = getLength([1, 2, 3, 4, 5]);
console.log(lenArray);
