function BinarySearch(array: number[], target: number) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer <= rightPointer) {
    let middlePoint = Math.floor((leftPointer + rightPointer) / 2);
    if (array[middlePoint] === target) {
      return middlePoint;
    }
    if (array[middlePoint] < target) {
      leftPointer = middlePoint + 1;
    } else {
      rightPointer = middlePoint - 1;
    }
  }
  return -1;
}

console.log(BinarySearch([2, 12, 89, 33, 93, 55, 43, 64, 63, 78, 78], 55));
