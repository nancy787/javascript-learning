function twoSum(nums, target) {
   for(let i = 0 ; i < nums.length ; i++) {
    for( let j = i + 1 ; j < nums.length ; j++) {
        if(nums[i] + nums[j] == target) {
            return [i, j]
        }
    }
   }
   return []
}

// console.log(twoSum( [2,5,5,11], 10));

function reverseArray(nums) {
    let temp = []
    for(let i = nums.length - 1 ; i  >= 0 ; i--) {
           temp.push(nums[i])
                
    }
    return temp
}
//o(n2)
// console.log( reverseArray([1,4,3,4,6,5]));
// tw pointeer approach is left value to right
function reverseArrayTwoPointerApproach(nums) {
 let left = 0
 let right = nums.length - 1;
 while( left < right) {
  let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp
    left++;
    right--
 }
 return nums
}
//o(n)
// console.log( reverseArrayTwoPointerApproach( [1,4,3,4,6,5] ) );

// nativre approach
function maximumNumber(nums){
    let max = nums[0]
    let min = nums[0]
    for(let i = 1 ; i < nums.length - 1 ; i++) {
        if(nums[i] < nums[i+1]) {
             max = nums[i+1]
        }
        if(nums[i] > nums[i+1]){
            min = nums[i+1]
        }
    }
    return [min, max]
}

// console.log(maximumNumber( [3, 5, 4, 1, 9]));

function kthSmallest(nums, k) {
   let sortedNums =  Sort(nums)
    return sortedNums[k- 1]
}
// bubble sort o(n2)
function Sort(nums) {
   for(let i = 0 ; i< nums.length - 1 ; i++) {
        for(let j = 0; j< nums.length - 1 ; j++) {
            if(nums[j] > nums[j+1]) {
                let temp = nums[j]
                nums[j] = nums[j+1];
                nums[j+1] = temp 
            }
        }
   }
    return nums   
}

// console.log(kthSmallest([7, 10, 4, 3, 20, 15], 4));

// easy wah

function buildInShort(nums, k) {
    nums.sort((a, b) => a - b);
    return nums[k -1 ]
}

// console.log(buildInShort([7, 10, 4, 3, 20, 15], 4));

function quickSelect(nums, k) {
     let pivot = nums.length - 1 ;
     let target = k - 1;
     let pivotIndex = partition(nums, pivot, target)
     console.log(pivotIndex);
     
}

function partition(nums, pivot, target) {
    for(let i = 0 ; i< pivot ; i++) {
        if(nums[i] < pivot) {
            [nums[target], nums[i]] = [nums[i], nums[target]]
        }
    }
    [nums[target], nums[pivot]] = [nums[pivot], nums[target]]

    return target  
}


console.log(quickSelect([7, 10, 4, 3, 20, 15], 4));
