import { func } from '../full_arr';

describe('', () => {
  it('', () => {
    expect(func([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  it('', () => {
    expect(func([1])).toEqual([[1]]);
  });

  it('', () => {
    expect(func([0, 1])).toEqual([
      [0, 1],
      [1, 0],
    ]);
  });
});
