const isPalindrome = require('../src/isPalindrome');

describe("isPalindrome", () => {
    describe("Empty Strings", () => {

        test('returns false for an empty string', () => {
            expect(isPalindrome("")).toBe(false);
        })
    })

    describe("Single Word Input", () => {

        test('returns true for simple palindrome', () => {
            expect(isPalindrome("bob")).toBe(true)
        })

        test('returns false if input is not a palindrome', () => {
            expect(isPalindrome("car")).toBe(false)
        })

    })

    describe("Multiple Word Input", () => {

        test('returns true for multi-word palindrome', () => {
            expect(isPalindrome("lonely tylenol")).toBe(true)
        })

    })

    describe("Case Sensitivity", () => {
        test('returns true for capital letters in palindrome', () => {
            expect(isPalindrome("lonely Tylenol")).toBe(true)
        })
    })

    describe ("Whitespace Weaknesses", () => {
        test('returns true for palindromes with leading spaces', () => {
            expect(isPalindrome(" bob")).toBe(true)
        })

        test('returns true for palindromes with trailing spaces', () => {
            expect(isPalindrome("bob ")).toBe(true)
        })

        test('return true for palindromes with multiple interior spaces as a separator', () => {
            expect(isPalindrome("lonely   tylenol")).toBe(true)
        })
    })

    describe("Punctuation", () => {
        test('returns true for palindromes with punctuations', () => {
            expect(isPalindrome("Madam, I'm Adam")).toBe(true)
        })
    })

    describe('Non-String Inputs', () => {
        test('handles non-string inputs gracefully', () => {
            expect(isPalindrome(389)).toBe(false)
            expect(isPalindrome(null)).toBe(false)
            expect(isPalindrome(undefined)).toBe(false)
            expect(isPalindrome({})).toBe(false)
        })
    })
})