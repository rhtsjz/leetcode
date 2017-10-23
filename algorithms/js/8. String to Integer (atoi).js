/**
 * Created by zsj on 16-8-29.
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    // 去掉空格
    str = str.trim();
    var result = 0;
    // 判断是否是空字符串
    if (!str) {
        return 0;
    }
    var flag = false;
    // '-' 和 '+' 以及两个连续出现的情况
    if (str.charAt(0) === '-') {
        flag = true;
        str = str.substring(1);
        if (str.charAt(0) == '-' || str.charAt(0) == '+') {
            return 0;
        }
    } else if (str.charAt(0) === '+') {
        str = str.substring(1);
        if (str.charAt(0) == '-' || str.charAt(0) == '+') {
            return 0;
        }
    }
    var pos = 1;
    // 从左到右遍历直到遇见非'0~9'的字符
    while (pos <= str.length) {
        var char = str.charAt(pos - 1);
        if (char <= '9' && char >= '0') {
            result = 10 * result + (char - '0');
        } else {
            break;
        }
        pos++;
    }
    if (flag) {
        result = 0 - result;
    }

    if (result < Math.pow(-2, 31)) {
        result = Math.pow(-2, 31);
    } else if (result > Math.pow(2, 31) - 1) {
        result = Math.pow(2, 31) - 1;
    }
    return parseInt(result);
};

console.log(myAtoi("-2147483648"));
