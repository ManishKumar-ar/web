function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printEvenNumbers(numbers);


//output
2
4
6
8
10
