/**
 * Created by zsj on 16-8-29.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // 如果是负数,直接返回false
    if (x < 0) {
        return false;
    }

    // 计算可以获取该数字的最高为数字的除数
    var div = 1;
    while (x / div >= 10) {
        div *= 10;
    }

    // 计算出数字x的最高位和最低位数字,并判断是否相等
    while (x !== 0) {
        var left = Math.floor(x / div);
        var right = x % 10;
        // 如果数字x的值当前的最高位和最低位数字的值不相等,返回false
        if (left != right) {
            return false;
        }
        // 去掉x的最低位和最高位重新计算x的值
        x = Math.floor((x % div) / 10);
        // 计算下次可以获取该数字的最高位的数字的除数的值
        div /= 100;
    }
    return true;
};

console.log(isPalindrome(1036006301));
