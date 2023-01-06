import { Quicksorting } from './quicksort';

describe('Quick Sort', () => {
  it('should return the correct value for average case', () => {
    expect(Quicksorting([1, 4, 2, 5, 9, 6, 3, 8, 10, 7], 0, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should return the correct value for worst case', () => {
    expect(Quicksorting([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should return the correct value for best case', () => {
    expect(Quicksorting([1, 4, 2, 9, 5, 7, 3, 8, 10, 6], 0, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
