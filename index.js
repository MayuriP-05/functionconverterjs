

module.exports = {
    // 1. Sum of all numbers in an array
    sum: (arr) => arr.reduce((acc, val) => acc + val, 0),
    
    // 2. Remove duplicates from an array
    unique: (arr) => [...new Set(arr)],
    
    // 3. Find the maximum value
    max: (arr) => Math.max(...arr),
    
    // 4. Find the minimum value
    min: (arr) => Math.min(...arr),
    
    // 5. Calculate the average
    average: (arr) => arr.length ? arr.reduce((acc, val) => acc + val, 0) / arr.length : 0,
    
    // 6. Flatten nested arrays
    flatten: (arr) => arr.flat(Infinity),
    
    // 7. Get the first 'n' elements
    firstN: (arr, n) => arr.slice(0, n),
    
    // 8. Check if all elements are unique
    isUnique: (arr) => arr.length === new Set(arr).size,
    
    // 9. Find intersection between two arrays
    intersect: (arr1, arr2) => arr1.filter(value => arr2.includes(value)),
    
    // 10. Sort an array in ascending order
    sortAsc: (arr) => [...arr].sort((a, b) => a - b),
  };
  