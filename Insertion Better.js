function insertionbetter(array) {
    let size = array.length;
    for (i = 0; i < size; i++) { 
        let temp = array[i]; 
        for (j = i-1; j >= 0 && array[j] > temp; j--) { 
            array[j+1] = array[j]; 
        }
        array[j+1] = temp;
        console.log(array, array[j+1]) 
    }
    return array;
};
console.log(insertionbetter([1, 4, 0, -1]))