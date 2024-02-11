function sumOfNumbers(arr) {
    let sum = 0;
    arr.forEach((element) => {
        if (typeof element === 'number') {
            sum += element;
        } 
    });
    return sum;
}

let mixedArray = [1, "2", 3, "4", "5", "six"];
let result = sumOfNumbers(mixedArray);
console.log(result); 
