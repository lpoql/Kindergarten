import { numberOfPairs } from '../pairs';

describe('number of pairs', () => {
  it('entry array has only one element', function () {
    expect(numberOfPairs([2])).toEqual([0, 1]);
  });

  it('only one pairs', () => {
    expect(numberOfPairs([2, 2])).toEqual([1, 0]);
  });

  it('find pairs', () => {
    expect(numberOfPairs([1, 3, 2, 1, 3, 2, 2])).toEqual([3, 1]);
  });
});
