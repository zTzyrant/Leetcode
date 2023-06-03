// findMedianSortedArrays https://leetcode.com/problems/median-of-two-sorted-arrays/description/
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let new_Arr = nums1.concat(nums2)
    new_Arr.sort((n1, n2) => n1 - n2)
    const median_loc: number = new_Arr.length % 2
    if(median_loc === 1){
      return new_Arr[Math.floor(new_Arr.length / 2)]
    } else {
      return ( new_Arr[(new_Arr.length / 2 - 1)] + new_Arr[(new_Arr.length / 2)] ) / 2
    }     
};

console.log(findMedianSortedArrays([1, 3], [4, 2]));