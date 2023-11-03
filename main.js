let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum = 0;
let positiveCount = 0;
let negativeCount = 0;
let min = arr[0];
let minIndex = 0;
let max = arr[0];
let maxIndex = 0;
let oddPositiveCount = 0;
let evenPositiveCount = 0;
let sumEvenPositive = 0;
let sumOddPositive = 0;
let productOfPositives = 1;
let maxElement = arr[0];

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
   if (arr[i] > 0) {
        positiveCount++;
   if (arr[i] % 2 !== 0) {
            oddPositiveCount++;
            sumOddPositive += arr[i];
} else {
            evenPositiveCount++;
            sumEvenPositive += arr[i];
}
  productOfPositives *= arr[i];
} else {
        negativeCount++;
    }
  if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
    }
  if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
  if (arr[i] > maxElement) {
        maxElement = arr[i];
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxElement) {
        arr[i] = 0;}
}
console.log("" + sum);
console.log("" + positiveCount);
console.log("" + min + " (" + minIndex + ")");
console.log("" + max + " (" + maxIndex + ")");
console.log("" + negativeCount);
console.log("" + oddPositiveCount);
console.log("" + evenPositiveCount);
console.log("" + sumEvenPositive);
console.log("" + sumOddPositive);
console.log("" + productOfPositives);
console.log("" + arr);

