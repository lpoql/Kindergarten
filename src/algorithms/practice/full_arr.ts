export function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  let current: number[] = [];

  function recursion(temp: number[], current: number[]) {
    if (current.length === nums.length) return res.push([...current]);

    for (let i = 0; i < temp.length; i++) {
      current.push(temp[i]);
      let t: number[] = [...temp];
      t.splice(i, 1); // remove old
      recursion(t, current);
      current.pop();
    }
  }

  recursion(nums, current);
  return res;
}

// [1,2,3]
export const func = (nums: number[]): number[][] => {
  const res: number[][] = [];

  function generate(curr: number[], recorder: { [p: string]: number }) {
    if (curr.length === nums.length) return res.push(curr.slice());

    nums.map(each => {
      if (recorder[each]) return;
      curr.push(each);
      recorder[each] = 1;
      generate(curr, recorder);
      curr.pop();
      delete recorder[each];
    });
  }

  generate([], {});
  return res;
};
