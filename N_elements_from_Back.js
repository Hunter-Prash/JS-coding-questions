function printLastNElements(arr, n) {
    if (n <= 0 || n > arr.length) {
        console.log("Invalid value of n.");
        return;
    }

    let ans = [];
    let startIndex = Math.max(0, arr.length - n);

    for (let i = arr.length - 1; i >= startIndex; i--) {
        ans.push(arr[i]);
    }
    return ans;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 10;
console.log(printLastNElements(array, n)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
