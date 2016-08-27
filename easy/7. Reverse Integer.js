/**
 * Created by zsj on 16-8-27.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var ret;
    if (x === 0) {
        ret = 0;
    } else {
        if (x > 0) {
            var xStrArray = (x + '').split("");
            var len = xStrArray.length;
            for (var i = 0; i < Math.floor(len / 2); i++) {
                var temChar = xStrArray[i];
                xStrArray[i] = xStrArray[len - 1 - i];
                xStrArray[len - 1 - i] = temChar;
            }
            ret = parseInt(xStrArray.join(""));
            if (ret > Math.pow(2, 31) - 1) {
                ret = 0;
            }
        } else {
            x = 0 - x;
            var xStrArray = (x + '').split('');
            var len = xStrArray.length;
            for (var i = 0; i < Math.floor(len / 2); i++) {
                var numChar = xStrArray[i];
                xStrArray[i] = xStrArray[len - 1 - i];
                xStrArray[len - 1 - i] = numChar;
            }

            ret = 0 - parseInt(xStrArray.join(""));
            if (ret < Math.pow(-2, 31)) {
                ret = 0;
            }
        }
    }
    return ret;
};

console.log(reverse(123));
