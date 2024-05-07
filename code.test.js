const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('your_quicksort_file.js')+'');

assert.deepStrictEqual(quicksort6Pivot([]), []);
assert.deepStrictEqual(quicksort6Pivot([1]), [1]);
assert.deepStrictEqual(quicksort6Pivot([3, 1, 2]), [1, 2, 3]);
assert.deepStrictEqual(quicksort6Pivot([5, 3, 4, 2, 1]), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(quicksort6Pivot([9, 6, 7, 5, 8, 4, 1, 2, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assert.deepStrictEqual(quicksort6Pivot([5, 1, 2, 7, 3, 9, 6, 4, 8]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assert.deepStrictEqual(quicksort6Pivot([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assert.deepStrictEqual(quicksort6Pivot([3, 2, 1, 5, 4]), [1, 2, 3, 4, 5]);
