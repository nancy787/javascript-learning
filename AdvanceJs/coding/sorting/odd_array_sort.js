class Solution {
    sortArrayByParity(nums) {
        let evenIndex = 0;
        let oddIndex = 1;
        const result = Array(nums.length);

        for (let num of nums) {
            if (num % 2 === 0) { // Check if number is even
                result[evenIndex] = num;
                evenIndex += 2;
            } else { // Number is odd
                result[oddIndex] = num;
                oddIndex += 2;
            }
        }

        return result;
    }
}

solve = new Solution
console.log(solve.sortArrayByParity([3,2,4,7]))