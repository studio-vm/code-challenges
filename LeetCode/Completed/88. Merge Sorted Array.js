var merge = function (nums1, nums2) {
   console.log(nums2);
   console.log(nums1);
   nums1 = nums1.splice(0, (nums1.length / 2));
   console.log(nums1);
   return [...nums1, ...nums2].sort();
};

// merge([1, 2, 3, 0, 0, 0], [2, 5, 6])
console.log(merge([1, 2, 3, 0, 0, 0], [2, 5, 6]));

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]
