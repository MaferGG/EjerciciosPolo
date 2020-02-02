function shellsort(array) {
    let gapsize = Math.floor((array.length) / 2);
    let size = array.length;
    while (gapsize > 0) {
        for (i = 0; i < gapsize; i++) {
            let temp = array[i];
            console.log(array[gapsize + i], "-", gapsize, "-", i, "-", array[0]);
            for (j = gapsize + i; j >= gapsize && array[gapsize + i] > temp; j = j - gapsize) {
                array[i] = array[gapsize + i];
                array[gapsize + i] = temp;
            }
            console.log(array)
        }
        gapsize = Math.floor(gapsize / 2)
    }
    return array;
}
console.log(shellsort([1, 4, 0, -1, 1, -4, 7, 9]))

