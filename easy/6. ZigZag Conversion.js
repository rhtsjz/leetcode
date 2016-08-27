/**
 * Created by zsj on 16-8-24.
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (s.length === 0 || numRows < 2) {
        return s;
    }

    var ret = '';
    // 循环周期
    var lag = 2 * numRows - 2;
    for (var i = 0; i < numRows; i++) {
        for (var j = i; j < s.length; j += lag) {
            ret += s[j];

            // 不是第一行和最后一行的时候 要加上一个
            if (i > 0 && i < numRows - 1) {
                var t = j + (lag - 2 * i);
                if (t < s.length) {
                    ret += s[t];
                }
            }
        }
    }
    return ret;
};
