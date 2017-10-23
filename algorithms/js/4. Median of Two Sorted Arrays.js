/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var sumCount = nums1.length + nums2.length;
    var isOdd = sumCount % 2;

    var median0, median1;
    median1 = Math.floor(sumCount / 2);
    if (isOdd == 1) {
        // 和是奇数
        median0 = median1;
    } else {
        // 和是偶数
        median0 = median1 - 1;
    }
    var sum = 0;
    if (nums1.length === 0 && nums2.length === 0) {

    } else {
        var current = 0;
        var i = 0, j = 0;
        var readCount = 0;
        while (i <= nums1.length, j <= nums2.length && readCount <= median1) {
            if (i >= nums1.length || nums1[i] > nums2[j]) {
                current = nums2[j];
                j++;
            } else {
                current = nums1[i];
                i++;
            }
            if (readCount == median0 || readCount == median1) {
                if (median0 == median1) {
                    sum = current * 2;
                } else {
                    sum += current;
                }
            }
            // console.log(current);
            readCount++;
        }
    }
    var median = sum / 2;
    // console.log(median);
    return median;
};

findMedianSortedArrays([3, 4], [1,2]);
