/**
 * Created by zsj on 16-8-23.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s) {
        return '';
    }

    var maxLength = 0;
    var maxStart = 0;
    var maxEnd = 0;

    for (var current = 0; current < s.length; current++) {
        var start = current;
        var end = current;

        // 找出当前字符之前的连续的相同的字符
        while (start - 1 >= 0) {
            if (s[start - 1] == s[current]) {
                start = start - 1;
            } else {
                break;
            }
        }

        // 找出当前字符之后连续的相同字符
        while (end + 1 <= s.length - 1) {
            if (s[end + 1 == s[current]]) {
                end = end + 1;
            } else {
                break;
            }
        }

        // 找出与当前字符不同的当前字符串的两端对称位置的相同的字符
        while (start - 1 >= 0 && end + 1 <= s.length - 1) {
            if (s[start - 1] == s[end + 1]) {
                start = start - 1;
                end = end + 1;
            } else {
                break;
            }
        }

        // 计算当前字符为中心的回文的长度,并与当前最长回文的长度作比较,
        // 如果比当前最长的回文长,则更新最长回文
        var length = end - start + 1;
        if (length > maxLength) {
            maxStart = start;
            maxEnd = end;
            maxLength = length;
        }
    }
    return s.substring(maxStart, maxEnd + 1);
};

var sub = longestPalindrome('a');
console.log(sub);
