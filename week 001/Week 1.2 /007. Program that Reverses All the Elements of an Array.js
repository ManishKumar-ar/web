function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}


let numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));


//output
[5, 4, 3, 2, 1]
