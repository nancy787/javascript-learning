'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const thirtInteger = firstInteger + parseInt(secondInteger);
    // console.log(thirtInteger);
    
    const firstDecimal = 4.0;
     console.log( parseFloat(firstDecimal+ secondDecimal))
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
 
    console.log(firstString  + secondString)
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    
}

// performOperation("12", "4.32", "is the best place to learn and practice coding!");


function vowelsAndConsonants(s) {
  for(let i = 0; i< s.length; i++){
        if(s[i] == 'a' ||
            s[i] == 'e' ||
            s[i] == 'i' ||
            s[i] == 'o' ||
            s[i] == 'u')

            {
                console.log(s[i])
            }
        }
    for(let i = 0; i<s.length; i++){
          if(s[i] !='a' &&
            s[i] != 'e' &&
            s[i] != 'i' &&
            s[i] != 'o' &&
            s[i] != 'u')

            {
                console.log(s[i])
            }
    }
}

// vowelsAndConsonants('javascriptloops')

// aaioojvscrptlps
// javascriptloops
// aaioojvs

// string start adn edns with same vaoule

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
   const re = "abca";
  let  firstChar = re.charAt(0);
   let lastChar = re.charAt(re.length - 1);
    let vowels = 
        ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let firstchar1 = vowels.includes(firstChar);
    let lastChar1 = vowels.includes(lastChar);
    
    if(firstchar1 === lastChar1) {
        return true;
    }
    return false
    
    /*
     * Do not remove the return statement
     */
    // return re;
}

function reverseString(s) {
    // console.log(typeof(s));
    if(typeof(s) == 'number'){
        return `s.split is not a function \n ${s}`;
    }
    s = String(s);
    let  reverse = '';
        for(let i = s.length - 1; i >= 0 ; i--){
            reverse += s[i];
        }    
    return
    
    // const reverse = s.split('').reverse().join('');
    // console.log(reverse)
   
}
// console.log(reverseString(Number(1234)))


function isPositive(a) {
    try {
        if(a > 0){
            return 'YES'
        }else if(a == 0){
            throw new Error('Zero Error.');
        }else if(a < 0){
            throw new Error('Negative Error.')
        }
    }catch(e){
      return e.message;
    }
}

console.log(isPositive(-1));


class Polygon{
    constructor(l1, l2,l3){
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    perimeter() {
        return this.l1 + this.l2 + this.l3
    }
}

const traiangle = new Polygon(3,4,5);
// console.log(traiangle.perimeter());


class Rectangle{
    constructor(l1,l2){
        this.l1 = l1 ;
        this.l2 = l2;
    }

}

Rectangle.prototype.area = function(){
    return this.l1 * this.l2;
}

class Square extends Rectangle{
    constructor(l1){
        super(l1, l1)
    }
}


if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    // console.log(rec.area());
    // console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}


function factorial(n){
    let fact = 1;
    for(let i=1 ; i<=n ; i++){    
        fact = fact * i
    }
    return fact;
}


let n = 4;
// console.log(factorial(n));


function getLetter(s) {
    let letter
    switch(s[0]){
            case 'a' : 
            case 'e' :
            case 'i' : 
            case 'o' :
            case 'u' :
            letter = 'A';
            break;
            case 'b' :
            case 'c' :
            case 'd' :
            case 'f' :
            case 'g' :
            letter = 'B';
            break;
            case 'h' :
            case 'j' :
            case 'k' :
            case 'l' :
            case 'm' :
            letter = 'C';
            break;
            default :
            letter = 'D'
            break;

    }
    return letter;
}

// console.log(getLetter('adfgt'));


function getLargest(nums) {
    let max = 0;

    for(let i = 0; i< nums.length; i++) {
        if(nums[i] > max){
            max = nums[i]
        }
    }

    return max;
}
// console.log(getLargest( [2,  3,  6,  6,  5 ]));

function getSecondLargest(array){
    let max1 = array[0];
    let max2= array[1];
    
    for(let i = 2 ; i< array.length; i++){
        if( array[i] > max1){

            max2 = max1
            max1 = array[i];
        }else{
            if(array[i] > max2 && array[i] < max1)
            max2 = array[i];
        }
    }
    return max2;
}

// console.log(getSecondLargest( [2,  3,  6,  6,  5 ]));
// console.log(getSecondLargest( [10, 9 , 9 , 8 , 8,  11,  8 , 0,  9, 1]));


function getSmallestNumber(nums){
    let min = nums[0];
    for(let i = 1; i< nums.length; i++){
        if(nums[i] < min){
            min = nums[i];
        }
    }
    return min;
}

// console.log(getSmallestNumber( [1,  3,  1,  6,  0 ]));

function getsecondSmallestNumber(nums){
    let min1 = nums[0];
    let min2 = nums[1];

    for(let i = 2; i< nums.length; i++){
        if(nums[i] < min1){
            min2 = min1;
            min1 = nums[i];
        }else{
            if(nums[i] < min2){
                min2 = nums[i];
            }
        }
    }
    return min2
}


console.log(getsecondSmallestNumber( [10, 9 , 9 , 8 , 8,  11,  8 , 0,  9, 1]));


class Rectangle1{
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    

    perimeter() {
        return 2 * (this.a + this.b);
    }
    
    area() {
        return this.a * this.b
    }
}


function Rectangle2(length, width){
    this.length = length,
    this.width = width,
    this.perimeter = 2 * (this.length + this.width)
    this.area =  this.length * this.width

        
}
    const rec = new Rectangle2(4, 5);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    // console.log(rec.area);


const modifyArray = ( (nums) => {
    let result = [];
    nums.forEach(num => {
        let mult;
        if(num % 2 == 0){
            mult = num * 2;
        }else{
            mult = num * 3
        }
        result.push(mult);
    });
    return result
})
// function modifyArray(nums) {
//     let result = [];
//     for(let i = 0 ; i<nums.length; i++) {
//         let mult;
//         if(nums[i] % 2 == 0){
//             mult = nums[i] * 2;
//              console.log(`${nums[i]} * 3 = ${mult}`);
//         }else{
//             mult = nums[i] * 3
//             console.log(`${nums[i]} * 3 = ${mult}`);
//         }
//         result.push(mult);
//     }
//     return result;
// }

let arr = [1,2,3,4,5];
console.log(modifyArray(arr));


// to get fulldate name need to passwth to LocaleString
function getDayName(dateString) {
    let dayName;
    let date  = new Date(dateString);
    dayName =  date.toLocaleString( 'en-Us', {weekday : 'long'});
    return dayName;
}
console.log(getDayName("10/11/2009"));

function getCounts(objects){
      let count = 0;
    objects.map((o)=> o.x == o.y ? count++ : count)
    return count;

}

 const n2 = [5, 11, 23, 24, 34, 45];
    let objects = [];
    
    for (let i = 0; i < n2; i++) {
        const [a, b] = readLine().split(' ');
        
        objects.push({x: +(a), y: +(b)});
    }

console.log(getCounts([5, 11, 23, 24, 34, 45]));

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    let  re  = new RegExp(/^[MEDR][rs]{1,2}\.[a-zA-Z]+$/)

    /*
     * Do not remove the return statement
     */
    return re;
}

// console.log(regexVar('Mr'));


function fizzBuzz(n) {
    // Write your code here
    for(let i = 1; i <= n; i++){
        if(i % 5 === 0 && i % 3 === 0){
            // console.log("FizzBuzz");
            continue;
        }
        if(i%3 === 0) {
            console.log("Fizz");
            continue;
        }
        if(i % 5 === 0){
            console.log("Buzz");
            continue;
        }
        // console.log(i);
    }
}
// console.log(fizzBuzz(15));


// Array sorting 

// bubble sort

// ascending
function bubbleSort(n) {
    let length = n.length;
    for(let i = 0 ; i<length - 1; i++){
        for(let j = 0; j < length-i-1 ; j++){
            if(n[j] > n[j+1]){
                let temp = n[j];
                n[j] = n[j+1];
                n[j+1]  = temp;
            }
        }
    }
    return n;
}

// console.log(bubbleSort([7,3,5,9,2]));


// desce

function bubbleSortDesc(n) {
    let length = n.length;
    for(let i = 0 ; i<length - 1; i++){
        for(let j = 0; j < length-i-1 ; j++){
            if(n[j] < n[j+1]){
                let temp = n[j];
                n[j] = n[j+1];
                n[j+1]  = temp;
            }
        }
    }
    return n;
}

// console.log(bubbleSortDesc([7,3,5,9,2]));


class Solution {
     twoSum(nums, target) {
        for(let i=0; i<nums.length; i++){
          for(let j = 1; j< nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
          }
        }
        return [];
    }
}

let solution = new Solution;
console.log(solution.twoSum([-1, -2, -3, -4, -5] , -8));

function  sortArrayByParity(nums) {
    // nums: integer array where half are even and half are odd.
    // Return a rearranged array with evens at even indices and odds at odd indices.
    for(let i = 0; i<nums.length -1 ; i++){
        for(let j = 0 ; j< nums.length - i- 1; j++){
            if(nums[j] > nums[j+1]){
                let temp = nums[j];
                nums[j]   = nums[j+1];
                nums[j+1]  = temp
            }
        }
    }
    return nums;
  }


  console.log(sortArrayByParity([4,1,2,3]));
  

//   reverse nuber
function reverse(nums) {
    let reverse = [];
    for(let i = nums.length - 1; i >=  0 ; i--) {
        reverse.push(nums[i])
    }
    return reverse;
}

currentLine
// fun


// functiom rverse

function reverseNumber(num) {
    let reverse = 0;
    while(num >  0){
        let digit = num%10;
        reverse = (reverse * 10) + digit
        num = Math.floor(num/10)
    }
    return reverse;
}

// console.log(reverseNumber(121));


function pallindrome(num) {
    let reversedNum = num;
    let reverse = 0;
    while(reversedNum > 0) {
        let digit = reversedNum%10;
        reverse = (reverse * 10) + digit
        reversedNum = Math.floor(reversedNum/10)
    }

    if(num === reverse) {
        return true;
    }
    return false
}

console.log(pallindrome(-121));

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  // Start with the first string as the prefix
  let prefix = strs[0];

  // Compare prefix with every other string
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // Shorten the prefix until it matches the start
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") {
            return " "
        }
    }
  }
  return prefix;
}



// console.log(longestCommonPrefix(['windtalker', 'winds', 'windy']));
console.log(longestCommonPrefix(['cat', 'dog', 'windy']));


function integerSquareRoot(x){
    const squarreRoot = Math.floor(Math.sqrt(x))
    return squarreRoot
}

// console.log(integerSquareRoot(32));


function squarreRoot(n){
  let res = 1
    while (res * res <= n) {
        res++;
        console.log("res", res);
    }
 return res - 1;
} 

console.log(squarreRoot(8));


function addStrings(num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);

        console.log(num1%10);
        
  }


  console.log(addStrings("23", "74"));

function maximizeNumber(nums) {
    let str = nums.toString();
    str = str.replace('6', '9'); 
    return parseInt(str);
}

//   console.log(maximizeNumber(9669));


function addStrings1(num1, num2) {
    num1 = num1.split('').reverse().join('')
    num2 = num2.split('').reverse().join('')
    let i = 0, j=0, carry=0;
    let result = []

    while( i< num1.length || j < num2.length || carry > 0) {
        const digit1 = i < num1.length ? parseInt(num1[i]) : 0;
        const digit2 = j < num2.length ? parseInt(num2[j]) : 0;

        const sum = digit1 + digit2 + carry;
        result.push(sum%10);
        carry = Math.floor(sum/10);
        i++;
        j++;
    }
    return result.reverse().join('');
}

console.log(addStrings1("23", "74"));


function LinearSearch(arr,  key) {
    let n = arr.length;
    for(let i = 0; i<=n ;i++) {
        if(arr[i] == key) {
            return console.log(`${key} is found at the index ${i}`);
            
        }else{
            return console.log(`${key} is not found`);
        }
    }
    return;
}

// console.log(LinearSearch([3,6,8,12,14,17,25,29,31,36,42,47,53,55,62],  3));

function BinarySerch(array, key) {
    let l = 0
    let h = array.length - 1
    while(l <= h) {
        let mid = Math.floor((l+h)  / 2)
        if (array[mid] === key) {
            return `elenmet ${key} is found at ${mid}`
        }
        if( key < array[mid]) {
            h = mid - 1
        }else{
            l = mid + 1
        }
    }

    return -1;
}

// time complexirty O(logn)
// console.log(BinarySerch([3,6,8,12,14,17,25,29,31,36,42,47,53,55,62], 3));


// Binary search using recursibe

function RecursiveBinarySearch(array, l, h, key) {
    if(l > h) {
        return 'no emelent foudn'
    }
    let mid = Math.floor((l + h)/2) 
    if(array[mid] === key){
        return mid
    }else if( key < array[mid]) {
        return RecursiveBinarySearch(array, l, mid-1, key)
    }else{
        return RecursiveBinarySearch(array, mid+1, h, key)
    }
}

console.log(RecursiveBinarySearch([3,6,8,12,14,17,25,29,31,36,42,47,53,55,62] , 0, 15 , 62));

// Merge Sort 
function mergeSort(arr, l = 0, h = arr.length - 1) {
if (l >= h) return;

    let mid = Math.floor((l + h) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, h);
    merge(arr, l, mid, h);
}

function merge(arr, l, mid, h) {
    let left = arr.slice(l, mid + 1);
    let right = arr.slice(mid + 1, h + 1);
    let i = 0, j = 0, k = l;

while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
        arr[k++] = left[i++];
    } else {
        arr[k++] = right[j++];
    }
}

    while (i < left.length) arr[k++] = left[i++];
    while (j < right.length) arr[k++] = right[j++];
}

let myArr = [9, 3, 7, 5, 6, 4, 8, 2];
mergeSort(myArr);
// console.log(myArr);

function maximizeSum(nums, k) {
    let sum = 0;     
    let max = Math.max(...nums)

    for( let i = 0 ; i< k ; i++){
        sum += max
        max ++;
    }
    
    return sum
}

console.log(  maximizeSum( [5.5,5] , 2))



// Quick sort Algorithm
function quickSort(arr, l, h) {
    if (l < h) {
        let j = partition(arr, l, h);
        quickSort(arr, l, j);      // sort left side
        quickSort(arr, j + 1, h);  // sort right side
    }
    return arr;
}

// Partinionijg Element
function partition(arr, l, h) {
    let pivot = arr[l];
    let i = l;
    let j = h;

    do {
        // move i forward until we find element greater than pivot
        do {
            i++;
        } while (i <= h && arr[i] <= pivot);

        // move j backward until we find element smaller or equal to pivot
        do {
            j--;
        } while (j >= l && arr[j] > pivot);

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];  // swap
        }

    } while (i < j);

    // now put pivot in correct place
    [arr[l], arr[j]] = [arr[j], arr[l]];

    return j; // return partition index
}

// Example usage
let arrayUnsorted = [10, 16, 8, 12, 15, 6, 3, 9, 5];
let sortedArray = quickSort(arrayUnsorted, 0, arrayUnsorted.length - 1);
console.log("Sorted Array:", sortedArray);


// easy way

function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high); // partition index
        quickSort(arr, low, pi - 1);        // sort left part
        quickSort(arr, pi + 1, high);       // sort right part
    }
    return arr;
}

// Partition function using a for loop
function partition(arr, low, high) {
    let pivot = arr[high];  // choose last element as pivot
    let i = low - 1;        // index of smaller element

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {   // if current element < pivot
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
        }
    }

    // Place pivot in correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;  // return pivot index
}

// Example usage
let array = [10, 16, 8, 12, 15, 6, 3, 9, 5];
let sorted = quickSort(array, 0, array.length - 1);
console.log("Sorted Array:", sorted);


// FindMissiong Number


function MissingNumber(num) {
    let expectedNumber = num.length;
    let expectedSum = (expectedNumber * (expectedNumber + 1))/2
    console.log('expectedNumber', expectedSum);
    
    let sum = 0;
    console.log(num.length);
    
    for(let i = 0 ; i < num.length ; i++) {
        sum = sum + num[i]
    }
    console.log("sum", sum);
    
    let missingNumber = expectedSum - sum;

    return missingNumber
}

console.log(MissingNumber([3,0,1]));


function minTimeToType(word) {
    let time = 0;
    let pointer = "a";
   for (let ch of word) {
      let clockwise = Math.abs(ch.charCodeAt(0) - pointer.charCodeAt(0));
      let counterclockwise = 26 - clockwise;
      time += Math.min(clockwise, counterclockwise) + 1;
      pointer = ch;
    }
    return time
}

console.log(minTimeToType('abc'));


function minOperationsToAdjustTime(initialTime, targetTime){
    let timeParts = initialTime.split(':');
    const Initalhours = Number(timeParts[0]);
    const initialminutes = Number(timeParts[1]);
    const initialTimeMinutes = (Initalhours * 60 )+ initialminutes

    const targetTimeParts = targetTime.split(':');
    const targetTimeHours = Number(targetTimeParts[0]);
    const targetTimeMinutes = Number(targetTimeParts[1]);
    const targetinutes = (targetTimeHours * 60 )+ targetTimeMinutes

    let totalTimeDifference = Math.abs(targetinutes -  initialTimeMinutes);
    let options = [60,15,5,1];
    let count = 0;

    for(let i of options){
        count += Math.floor(totalTimeDifference/i)
        totalTimeDifference = totalTimeDifference % i;
    }
    return count;
}

console.log(minOperationsToAdjustTime('01:40', '03:45'));


function Duplicates(nums) {
    // const unique = [...new Set(nums)]
    // const unique = []
    // for( let num of nums) {
    //     if(!unique.includes(num)) {
    //         unique.push(num)
    //     }
    // }
    // let TotalCount = unique.length
    // return TotalCount;

    if (nums.length === 0) return 0;

        let uniqueIndex = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[uniqueIndex]) {
                uniqueIndex++;
                nums[uniqueIndex] = nums[i];
            }
        }
        return uniqueIndex + 1;
}

console.log(Duplicates( [1,1,2]));

// function   merge(arr1, m, arr2, n) {
//     console.table( [arr1, m, arr2, n]);
//     let list1 = arr1[0];
//     let list2 = arr2[0];
//     let list1Index = 0;
//     let list2Index = 0;
//     let merge = []
//     for(let i = 0; i < m -1 ; i++) {
//         for(let j = 0; j< n-1 ; j++) {
//             if(arr1[i] == 0 || arr2[j] == 0) {
//                 return;
//             }

//             if( list1 < list2) {
//                 list1Index++;
//                 merge.push(arr1[i]);
//             }else{
//                 list2Index++;
//                 merge.push(arr2[j])
//             }
//         }
//     }
//     return merge;
    
// }

function   merge(arr1, m, arr2, n){
    let i = 0;
    let j = 0;
    let merge = []

    while( i < m && j < n ) {
        if(arr1[i] < arr2[j]) {
            merge.push(arr1[i])
                i++
        }else {
            merge.push(arr2[j])
            j++;
        }
    }

    while( i < m ){
        merge.push(arr1[i])
        i++
    }

    while( j < n ) {
        merge.push(arr2[j])
        j++
    }
    return merge
}


console.log(merge( [0,0,0,0,0], 0, [1,2,3,4,5], 5 ))


function missingNumber1(nums) {
    let length = nums.length;
    let expectedNumber = (length * (length + 1))/2
    let sum = 0;

    for (const num of nums) {
            sum = sum + num;
    }
    
    let missingNumber = expectedNumber - sum;
    
    return missingNumber
}

console.log(missingNumber1( [0,1]));
