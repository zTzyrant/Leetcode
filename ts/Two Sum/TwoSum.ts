// Two Sum https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    let result: any[] = []
    for (let x = 0; x < nums.length; x++) {
        for (let k = 0; k < nums.length; k++) {
            if(x !== k){
                if(nums[x] + nums[k] === target){
                    result.push(x)
                    result.push(k)
                    x = nums.length
                    k = nums.length
                }
            }
        }
    }
    return result
};

console.log(twoSum([2,7,11,15], 9));