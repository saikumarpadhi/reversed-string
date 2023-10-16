const numbers = [4, 2, 8, 6, 1, 9, 5];

// Sort the array in descending order
numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers);