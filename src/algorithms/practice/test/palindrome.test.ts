import { isPalindrome, longestPalindrome } from '../palindrome';

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

describe('Test example ', () => {
  it('test example of 121', () => {
    expect(isPalindrome(121)).toBeTruthy();
  });

  it('test example of -121', () => {
    expect(isPalindrome(-121)).toBeFalsy();
  });

  it('test example of 10', () => {
    expect(isPalindrome(10)).toBeFalsy();
  });
});
