// [1,3,2,1,3,2,2]
// @params: number array
// return:  an array with a length of 2,
//          the index of 0 element  is the number of the pairs generated from the entry array,
//          the index of 1 element is the number of remaining elements

export function numberOfPairs(nums: number[]): number[] {
  let list = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    list.set(nums[i], !(list.get(nums[i]) || false)); // 奇数 true
    if (!list.get(nums[i])) {
      count++;
    }
  }

  return [count, nums.length - count * 2];
}
