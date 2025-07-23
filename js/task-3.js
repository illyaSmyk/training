// Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.


function filterArray(number, value) {
    let newmassive=[];
    for (const newnumber of number) {
        if (newnumber > value) {
            newmassive.push(newnumber);
        }
    }
    return newmassive;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]