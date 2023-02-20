import { bestHand } from './poker';

describe('', () => {
  it('Flush', function () {
    expect(bestHand([13, 2, 3, 1, 9], ['a', 'a', 'a', 'a', 'a'])).toBe('Flush');
  });

  it('Pair', function () {
    expect(bestHand([6, 6, 2, 3, 5], ['d', 'a', 'a', 'b', 'c'])).toBe('Pair');
  });

  it('Three of a Kind', function () {
    expect(bestHand([4, 4, 2, 4, 4], ['d', 'a', 'a', 'b', 'c'])).toBe('Three of a Kind');
  });

  it('High Card', function () {
    expect(bestHand([6, 4, 2, 3, 5], ['d', 'a', 'a', 'b', 'c'])).toBe('High Card');
  });

  it('Three of a Kind and pair', function () {
    expect(bestHand([1, 1, 1, 2, 2], ['a', 'b', 'c', 'a', 'd'])).toBe('Three of a Kind');
  });
});
