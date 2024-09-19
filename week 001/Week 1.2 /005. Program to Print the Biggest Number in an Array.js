
function findBiggestNumber(arr) {
    let max = arr[0]; // Assume first number is the largest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("Biggest number is:", max);
}


let numbers = [3, 67, 99, 2, 45, 78, 13];
findBiggestNumber(numbers);



//output
Biggest number is: 99
