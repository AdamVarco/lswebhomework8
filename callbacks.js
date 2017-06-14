/*  For today's homework your job is to write functions
 *  that make the following invocations work.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  var greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */


// Write a function called firstItem that passes the first item of the given array to the callback function
function firstItem(arr, cb){
	cb(arr[0]);
};

var foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

firstItem(foods, (firstItem) => {
  console.log('The first item is ' + firstItem);
});

// Write a function called getLength that passes the length of the array into the callback

function getLength(arr,cb){
	cb(arr.length);
};

getLength(foods, (length) => {
  console.log('The length of the array is ' + length);
});

// Write a function called last which passes the last item of the array into the callback

function last(arr, cb){
	var lastItem = arr[arr.length-1];
	cb(lastItem);
};

last(foods, (lastItem) => {
  console.log('The last item in the array is ' + lastItem);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback
function sumNums(num1, num2, cb){
	var sum = num1+num2;
	cb(sum);
};

sumNums(5, 10, (sum) => {
  console.log('The sum is ' + sum);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
function multiplyNums(num1, num2, cb){
	var total = num1*+num2;
	cb(total);
};

multiplyNums(5, 10, (product) => {
  console.log('The product is ' + product);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
function contains(arr, item,cb){
if(arr.includes(item)===true)
cb(true);
else
cb(false);
};

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
function removeDuplicates(list, cb){
	var result = [];
	$.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    cb(result);
};

removeDuplicates(foods, (uniqueFoods) => {
  console.log('foods with duplicates removed: ' + uniqueFoods);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
function forEach(arr, cb){
 for(var i = 0; i <arr.length; i++){
	  var value = arr[i].toString();
	 cb(value, i);
 }
};
forEach(foods, (value, index) => {
  console.log('${value} is at index ' + index);
});
