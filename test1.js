const multiply = (a, b, c) => a * b * c;
const add = (a, b, c, d, e) => a + b + c + d + e;

const curry = (f) => function curried(...nums) {
    if (nums.length >= f.length) {
        return f(...nums);
    } else {
        return (...finalNums) => curried(...nums, ...finalNums);
    }
};

// Test
console.log(curry(multiply)(1)(2)(3) == multiply(1, 2, 3));
console.log(curry(add)(1)(2)(3)(4)(5) == add(1, 2, 3, 4, 5));