const maxSumContiguous = require("./index");

test("maxChar function exists", () => {
  expect(typeof maxSumContiguous).toEqual("function");
});

test("Find the contiguous non-empty subarray of [1, 2, 3, 4, -10]", () => {
  expect(maxSumContiguous([1, 2, 3, 4, -10])).toEqual(10); 
});

test("Find the contiguous non-empty subarray of [-2, 1, -3, 4, -1, 2, 1, -5, 4]", () => { 
  expect(maxSumContiguous([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});
