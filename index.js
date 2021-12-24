/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals.sort(([a, b], [c, d]) => a - c);
  let res = [];

  for (let interval of intervals) {
    if (res.length === 0 || interval[0] > res[res.length - 1][1]) {
      res.push(interval.concat());
    } else {
      res[res.length - 1][1] = Math.max(interval[1], res[res.length - 1][1]);
    }
  }

  return res;
};

// Ex.1
console.log(
  merge([[1, 3], [2, 6], [8, 10], [15, 18]])
)

// Ex.1
console.log(
  merge([[1, 4], [4, 5]])
)
