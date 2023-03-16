/*
 * example: "babad"
 * longest: "bab" or "aba"
 * */

export function longestPalindrome(str: string) {
    let longest = '';
    if (str.length < 2) return str;

    for (let i = 0; i < str.length; i++) {
        // odd
        check(i, i);
        // even
        check(i, i + 1);
    }

    function check(start: number, end: number) {
        while (end < str.length && start >= 0) {
            if (str[start] == str[end]) {
                end++;
                start--;
            } else {
                break;
            }
        }
        if (end - start - 1 > longest.length) {
            longest = str.slice(start + 1, end);
        }
    }

    return longest;
}

/**
 * example: 121
 * return true
 *
 * example: -121
 * return false, because of -121 inverted result is 121-
 *
 * @return boolean
 * @param x
 */

export function isPalindrome(x: number): boolean {
    if (x < 0) return false
    const a = Number(x.toString().split('').reverse().join(''))
    return a === x
};