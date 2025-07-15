function linearSearch(array, target) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([2, 12, 89, 33, 93, 55, 43, 64, 63, 78, 78], 55));
