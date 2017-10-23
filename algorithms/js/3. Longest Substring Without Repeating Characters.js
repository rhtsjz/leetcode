/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var subStart = 0;
    var subLength = 0;
    var subStartOfLongest = 0;
    var subLengthOfLongest = 0;
    var subStr = '';
    console.log('s          : ', s);
    for (var current = 0; current < s.length; current++) {
        var subIndex = subStr.indexOf(s[current]);
        // 子字符串中是否存在当前字符
        if (subIndex != -1) {
            // 已经存在 重新设置自字符串的开始和长度的值
            subStr = subStr.substring(subIndex + 1);
            subLength = subLength - (subIndex + 1) + 1;
            subStart = subStart + subIndex + 1;
        } else {
            // 不存在直接将自字符串长度+1
            subLength++;
        }
        subStr = subStr + s[current];

        // console.log('subStart   : ', subStart);
        // console.log('subLength  : ', subLength);
        // console.log('subStr     : ', subStr);
        // console.log('');
        if (subLength > subLengthOfLongest) {
            subStartOfLongest = subStart;
            subLengthOfLongest = subLength;
        }
    }
    // var longestSubstring = s.substring(subStartOfLongest, subStartOfLongest +
    // subLengthOfLongest); console.log(longestSubstring);
    return subLengthOfLongest;
};

lengthOfLongestSubstring('abcaaabcdef');

