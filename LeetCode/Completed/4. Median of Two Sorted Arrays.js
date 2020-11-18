let nums1 = [1, 3];
let nums2 = [2];

var findMedianSortedArrays = function (nums1, nums2) {
  console.log(arguments);
  let x = [...nums1, ...nums2];
  x = x.reduce((acc, cur) => { acc += cur; },0);
  console.log(x);
  x = x / (nums1.length + nums2.length);
  console.log(x);
  return x;

};

console.log(findMedianSortedArrays(nums1, nums2));