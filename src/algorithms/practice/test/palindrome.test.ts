import { longestPalindrome } from '../palindrome';

describe('Test example of longest palindrome', () => {
  it('test example of "bb"', () => {
    expect(longestPalindrome('bb')).toBe('bb');
  });

  it('test example of "ababab"', () => {
    expect(longestPalindrome('ababab')).toBe('ababa');
  });

  it('test example of "a"', () => {
    expect(longestPalindrome('a')).toBe('a');
  });

  it('test example of "abacac"', () => {
    expect(longestPalindrome('abacac')).toBe('aba');
  });
});
