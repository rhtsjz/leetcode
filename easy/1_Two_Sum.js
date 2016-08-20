/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 一个hash表用于存放数组中被检查过的元素,key为数组元素的值,value为数组元素的索引
    var temp = {};
    // 结果数组
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        // 首先检查该元素是否已经存在于hash表中,如果不存在放入
        if (temp[nums[i]] === undefined) {
            temp[nums[i]] = i;
        }
        var numTemp = target - nums[i];
        // 检查差值是否存在于hash表中, 如果存在并且差值对应的key的值小于当前索引值,则将两个索引值放入结果数组并返回.
        if (temp[numTemp] !== undefined) {
            var j = temp[numTemp];
            if (j < i) {
                result.push(j);
                result.push(i);
                return result;
            }
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
    // 结果数组
    var result = [];
    // 两层循环将数组中的每个元素与其他元素相加与target作比较,如果相等则将两个索引值放入结果数组并返回.
    for (var i = 0; i < nums.length; i++) {
        for(var j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] == target){
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
};

var numbers = [0, 4, 3, 0];
var target = 0;
console.log(twoSum(numbers, target));
console.log(twoSum1(numbers, target));
