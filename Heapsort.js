Function heapsort(array){
    let size = array.length;
    let gapsize = Math.floor(size/2-1)
    let k= length-1;
    while (i>=0){
        gapsize(array, length, i)
    }
    while (k=>0){
        [array[0],array[k] = [array[k],array[0]]]
        gapsize(array,k,0)
    }
    return array;
}
console.log(heapsort([3,4,0,-1,1,-4,7,9]));
