// ******EJEMPLO MERGESORT***** //

// function merge(a) {
//     if (a.length === 1)
//         return a;
//     redondeo = Math.floor(a.length / 2);
//     let aDer = a.slice(0, redondeo);
//     let aIzq = a.slice(redondeo);
//     let derOrd = merge(aDer);
//     let io = merge(aIzq);
//     let nuevo = [];
//     while (derOrd.length > 0 && io.length > 0) {
//         if (io[0] > derOrd[0]) {
//             nuevo.push(derOrd[0]);
//             derOrd.shift();
//         }
//         else {
//             nuevo.push(io[0]);
//             io.shift();
//         }

//     }
//     return nuevo = [...nuevo, ...derOrd, ...io]
// }
// console.log(merge([3, -2, -6, 5, 4, 0]));

// ******EJEMPLO QUICKSORT***** //

function quicksort(a) {
    if (a.length <= 1) {
        return a;
    }
    let menores = [];
    let mayores = [];
    let pivote = a[0];
    for (i = 1; i < a.length; i++) {
        if (pivote > a[i]) {
            menores.push(a[i]);
        }
        else {
            mayores.push(a[i])
        }
    }
    let menoresOrd = quicksort(menores);
    let mayoresOrd = quicksort(mayores);
    let acomodo = [...menoresOrd, pivote, ...mayoresOrd];
    return acomodo;
}
console.log(quicksort([3, 2, -6, 5, -4, 0]));
