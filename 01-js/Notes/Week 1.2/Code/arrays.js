// Write A program to print all the even ages in the below Array
const ages = [10, 35, 40, 65, 75, 30, 28, 29];

let count = 0; // Moved outside the loop

for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 === 0) {
        count += 1;
        
    }
}

console.log("Total even numbers in the array: " + count);

// Write A program to print the largest number in the below array
const numbers = [10,20,30,40,89,5,60,4,34]


let max = numbers[0]

for (let i =0 ;i<numbers.length;i++){
    if(numbers[i]> max){
        max = numbers[i]
    }
}
console.log(max)