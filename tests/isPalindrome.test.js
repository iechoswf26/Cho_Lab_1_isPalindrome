const isPalindrome = require('../src/isPalindrome');

/* Test 1 (Green): The test passes a function was written to return 0 for an empty string.
 */
test('returns 0 for an empty string', () => {
    expect(isPalindrome("")).toBe(0);
});

/*
Test 2 (Green): Single-word input. The function skips the if block because it is false; the test passes a literal string which means the input is NOT empty. For non-empty strings, the test will return 1. Therefore, the test passes.
 */
test('return 1 for a single word', () => {
    expect(isPalindrome("bob")).toBe(1)
})