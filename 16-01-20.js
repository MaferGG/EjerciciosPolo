// const array  = [0,3,2,5,-1,4]
// for (let h=0; h<=array.length; h++){
// for (let i=0; i<=array.length; i++){
//     if (array[i] >array [i+1]){
//         temp = array[i]
//         array [i] = array [i+1]     /*EJEMPLO BUBBLE SORT*/
//         array [i+1] = temp
//         }
//     }
// }
// console.log(array);

/*_________________________________*/

// const array = [32,14,-4,8,53,12,107,33,1,5,87,64]
// let menor;
// let posicionmenor;
// for (let h=0; h<=array.length; h++){
// for (let i=h+1; i<=array.length; i++){
//     if (array[h] > array[i]){
//             menor = array [i];
//             posicionmenor = i;                /*EJEMPLO SELECTION SORT*/
//             let temp = array[h]
//         array [h] = menor;
//         array [posicionmenor] = temp;
//        }
//     } 
// }
// console.log(array);

// /*___________________________________________*/

// const array = [6,3,9,14,-3];
// function insertion(array) {
//     copy = [array[0]];
//     for (i = 1; i < array.length; i ++) {
//         if (array[i] < copy[i - 1]) {
//             var temp = array[i]
//             for (j = copy.length - 1; j >= 0; j--) {
//                 if (j == 0 && temp < copy[j]) {
//                     copy.splice(j, 0, temp);
//                     break;  
//                 }
//                 if (temp < copy[j] && temp > copy[j - 1]) {      /*EJEMPLO INSERTION SORT*/
//                     copy.splice(j, 0, temp);
//                     break;
//                 }
//             }
//         }
//         else{
//             copy.push(array[i]);
//         }
//         console.log(copy);
//     }
//     console.log(copy);

// }
// insertion(array);
/*________________________________*/

const array = [6, 3, 9, 14,-3];
function insertion(array) {
    for (i = 0; i < array.length; i++) {
        let x = array[i];
        j = i - 1
        while (j >= 0 && array[j] > x) {                 /*EJEMPLO INSERTION SORT 2*/
            array[j + 1] = array[j];
            j = j - 1
        }
        array[j + 1] = x
    }
    console.log(array);
}
insertion(array);

// /*______________________________________*/
