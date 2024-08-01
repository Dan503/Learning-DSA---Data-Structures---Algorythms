# Big O notation

Definition: A mathematical notation that describes the limiting behavior of a function when the argument tends towards infinity. Typically used to describe the time complexity of an algorithm.

Time complexity is a measure of the amount of time an algorithm takes to run, depending on the amount of data the algorithm is working on and the amount of operations it needs to run per item in the data.

> `n` = number of elements to process
> "O" = "Order of", essentially of similar complexity

Big O looks at the big picture. The worst case scenario of an algorithm to determine how performant it is.

Big O is not affected by the number of individual operations in an algorithm. It is all about if the size of the input changes, does the computation time of the algorithm increase and if it does, how much does it increase by?

## Big O(1) - Constant Time {BEST}

Big O(1) is as good as an algorithm can possibly get. An algorithm with O(1) will always take the same amount of time to compute weather the array has 2 elements or 50 Billion elements.

```
T |
I |
M |
E | x x x x x x x x x O(1)
  |__________________
     Element count
```

```js
// An O(1) algorithm
function getFirstElementOfArray(array) {
	return array[0]
}

getFirstElementOfArray([1, 3, 5, 6, 8, 12, 21, 65, 68, 99])
// 1) [1] 3, 5, 6, 8, 12, 21, 65, 68, 99 // Found it!
```

## Big O(log n) - Logarithmic Time {2nd BEST}

Logarithmic time is the inverse of exponential time.

Logarithmic growth means that as the input size `(n)` increases, the number of operations needed grows very slowly in comparison.

```
T |
I |
M |         x   x   x  O(log n)
E |    x
  |x_________________
     Element count
```

Binary search is logarithmic because it halves the number of items in the array that it needs to consider with each iteration.

It requires an already sorted array for it to work.

```js
function binarySearchFindIndexOf(sortedArray, target) {
	let left = 0
	let right = sortedArray.length - 1
	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		if (sortedArray[mid] === target) {
			return mid
		} else if (sortedArray[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return -1 // Target not found
}

// worst case scenario is trying to find 99 at end of the array
binarySearchFindIndexOf([1, 3, 5, 6, 8, 12, 21, 65, 68, 99], 99) // 9
// 10 items in the array, the target is at index 9
// 1) {1, 3, 5, 6, 8, [12], 21, 65, 68, <99>} ? >12
// 2) 1, 3, 5, 6, 8, 12, {21, [65], 68, <99>} ? >65
// 3) 1, 3, 5, 6, 8, 12, 21, 65, {[<68>], <99>} ? >68
// 4) 1, 3, 5, 6, 8, 12, 21, 65, <68>, {[<99>]} ? 99! hit the target!
```

It only needs to do 4 iterations to get to the result.

For comparison, a linear find algorithm would need to do 10 iterations before finding the result.

The syntax for saying that the algorithm halves the array with each iteration is this:
`log2​(n)=k`

## O(n) - Linear Time {3rd BEST}

This is the most basic type of algorithm. The number of iterations is equal to the number of elements in the array.

```
T |                  x O(n)
I |             x
M |        x
E |    x
  |x_________________
     Element count
```

```js
function linearFindIndex(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i
		}
	}
	return -1 // Target not found
}
linearFindIndex([1, 3, 5, 6, 8, 12, 21, 65, 68, 99], 99) // 9
// 10 items in the array, the target is at index 9
// 1) [1], 3, 5, 6, 8, 12, 21, 65, 68, 99
// 2) 1, [3], 5, 6, 8, 12, 21, 65, 68, 99
// 3) 1, 3, [5], 6, 8, 12, 21, 65, 68, 99
// 4) 1, 3, 5, [6], 8, 12, 21, 65, 68, 99
// 5) 1, 3, 5, 6, [8], 12, 21, 65, 68, 99
// 5) 1, 3, 5, 6, 8, [12], 21, 65, 68, 99
// 7) 1, 3, 5, 6, 8, 12, [21], 65, 68, 99
// 8) 1, 3, 5, 6, 8, 12, 21, [65], 68, 99
// 9) 1, 3, 5, 6, 8, 12, 21, 65, [68], 99
// 10) 1, 3, 5, 6, 8, 12, 21, 65, 68, [99] !hit (finally)
```

## O(n log n) - Log-Linear Time {4th BEST}

This is common in efficient sorting algorithms and many other "divide and conquer" algorithms.

Merge-sort and Quick-sort are O(n log n)

> n log n = n x log n

number of elements x number of divisions

```
T |          x O(n)
I |        x
M |      x
E |   x
  |x_________________
     Element count
```

### n = the number of elements

In quick sort, every element in the array needs to be examined at least once.

### log n = the number of splits that n can handle

O(n log n) algorithms tend to have divide and conquer strategies. "log n" refers to how many of those divisions take place

In Merge sort, `log n` refers to the number of times that the array can be split in half before it becomes separate single digit arrays.

```js
function quickSort(array) {
	// See quickSort folder
}
```

[quickSort folder for an example of a O(n log n) algorithm](../quickSort/2-quickSort-recurring-ascending.ts)

Think, how many times can I divide this number of elements in half?

another way of thinking about it is:

> 2^x (2 to the power of what is equal to n?)

`log n` = number of times you can divide array by 2

It's possible to run into situations where you have `n + n log n`. the `n +` bit is ignored in Big O notation.

If you have `m + n log n`, then you will need to include the m since it is a different variable to the others.

`m` usually comes into play when there are nested arrays.

## O(n^2) - Quadratic time {5th BEST}

The running time increases by the number of elements multiplied by the number of elements

(n x n = n^2)
(n x n x n = n^3)
(n x n x n x n = n^4)

The algorithm's running time grows quadratically with the input size.

```
T |      x O(n^2)
I |      x
M |     x
E |   x
  |x_________________
     Element count
```

```js
function multiplyAll(array1, array2) {
	if (array1.length !== array2.length) {
		return undefined
	}

	let total = 0
	// for every item in array 1
	for (let i = 0; i < array1.length; i++) {
		// it needs to loop through every item in array 2
		for (let j = 0; j < array2.length; j++) {
			total = total + array1[i] * array2[j]
		}
	}
	return total
}
multiplyAll([1, 5, 20], [5, 10, 15]) // 780 total
// x - 1)  [1], 5, 20
// 1 - 1A)    [5], 10,  15  // 1 x 5 = 5
// 2 - 1B)     5, [10], 15  // 1 x 10 = 10
// 3 - 1C)     5,  10, [15] // 1 x 15 = 15

// x - 2)  1, [5], 20
// 4 - 2A)    [5], 10,  15  // 5 x 5 = 25
// 5 - 2B)     5, [10],  15  // 5 x 10 = 50
// 6 - 2C)     5, 10,  [15]  // 5 x 15 = 75

// x - 3)  1,  5, [20]
// 7 - 3A)    [5], 10,  15  // 20 x 5 = 100
// 8 - 3B)     5, [10], 15  // 20 x 10 = 200
// 9 - 3C)     5,  10, [15] // 20 x 15 = 300

// 3 x 3 = 9 thus O(n^2)
```

Note that the following example is also n^2.

Normally we would think of this as `n^2 / 2` however `infinity/2` is still infinity. We don't generally care about constants in Big O notation. We only care about how `n` interacts with itself.

```
 _________
| x x x x |
|   x x x |
|     x x |
|_______x_|
```

It is possible to have `n^3` or `n^4` algorithms however these tend to be pretty rare, `n^3` is about as high as you would ever get.

## O(2^n) - Exponential Time {6th BEST}

Exponential Time usually comes in the form of recursive functions.

```
T |   x O(2^n)
I |   x
M |  x
E | x
  |x_________________
     Element count
```

```ts
function fibonacciByIndex(index: number): number {
	if (index <= 1) {
		return index
	}
	return fibonacci(index - 1) + fibonacci(index - 2)
}
// 0 => 1
// ​1 => 1
// ​2 => 2
// ​3 => 3
// ​4 => 5
// ​5 => 8
// ​6 => 13
// ​7 => 21
// ​8 => 34
// ​9 => 55
```

You can also have situations where the 2 is more of an arbitrary number. In this case it would be `O(c^n)`

```js
function recursion(i, nums, c) {
	if (i == nums.length) {
		return 0
	}

	// The addition of looping creates the c^n scenario
	for (let j = 0; j < i + c; j++) {
		recursion(j + 1, nums, c)
	}
	console.log(i)
}
```

Note that in the below example, only the left most node is being shown, every node would have 3 child values.

```
n = 2;
c = 3;
c^n = 3^2
  ^         O
  |       / | \
n |      o  o  o
  |    / | \
  v   o  o  o
     |<- c ->|
```

## O(n!) - Factorial time complexity {WORST}

n! = The product of all positive integers less than or equal to n

Rapid Growth: Factorial time complexity grows extremely fast. For example:

> 3! = 3 × 2 × 1 = 6
> 4! = 4 × 3 × 2 × 1 = 24
> 5! = 5 × 4 × 3 × 2 × 1 = 120
> 10! = 3,628,800

As you can see, even for small values of n, the factorial function grows very quickly.

```
T | x O(n!)
I | x
M | x
E | x
  |x_________________
     Element count
```

```ts
function generatePermutations(arr: number[]): number[][] {
	const result: number[][] = []

	function permute(current: number[], remaining: number[]): void {
		if (remaining.length === 0) {
			result.push(current)
		} else {
			for (let i = 0; i < remaining.length; i++) {
				const next = current.concat(remaining[i])
				const remainingElements = remaining
					.slice(0, i)
					.concat(remaining.slice(i + 1))
				permute(next, remainingElements)
			}
		}
	}

	permute([], arr)
	return result
}

const permutations = generatePermutations([1, 2, 3, 4])
// permutations.length = 24
//
// permutations = [
// [ 1, 2, 3, 4 ]
// [ 1, 2, 4, 3 ]
// ​[ 1, 3, 2, 4 ]
// ​[ 1, 3, 4, 2 ]
// ​[ 1, 4, 2, 3 ]
// ​[ 1, 4, 3, 2 ]
// ​[ 2, 1, 3, 4 ]
// ​[ 2, 1, 4, 3 ]
// ​[ 2, 3, 1, 4 ]
// ​[ 2, 3, 4, 1 ]
// ​[ 2, 4, 1, 3 ]
// ​[ 2, 4, 3, 1 ]
// ​[ 3, 1, 2, 4 ]
// ​[ 3, 1, 4, 2 ]
// ​[ 3, 2, 1, 4 ]
// ​[ 3, 2, 4, 1 ]
// ​[ 3, 4, 1, 2 ]
// ​[ 3, 4, 2, 1 ]
// ​[ 4, 1, 2, 3 ]
// ​[ 4, 1, 3, 2 ]
// ​[ 4, 2, 1, 3 ]
// ​[ 4, 2, 3, 1 ]
// ​[ 4, 3, 1, 2 ]
// ​[ 4, 3, 2, 1 ]
// ]
```

## Other less used Big O formats

### O(n.m)

This represents `n x m`

```
 _________
| x x x x |
|_x_x_x_x_|
```

```js
// 2 arrays that have 3 values each
const nums = [
	[1, 2, 3],
	[4, 5, 6],
]
nums.forEach((subArray, i) => {
	subArray.forEach((n, j) => {
		console.log(nums[i][j])
	})
})
```

### O(sqrt(n))

The square root of n... extremely rare to find an algorithm that uses this.

It sits between `O(n)` and `O(log n)` in order of efficiency.

```js
const n = 12
const factors = []
for (let i = 0; i < Math.sqrt(n) + 1) {
	if (n % i === 0) {
		factors.push(i)
		factors.push(Math.floor(n / i))
	}
}
console.log(factors)
```

## JS functions

### Big O(1) - Constant time

```js
let array = [ 1, 2, 3, 4 ]

[...array].push(5) // [ 1, 2, 3, 4, 5 ]
[...array].pop() // [ 1, 2, 3 ]
```

### Big O(n) - Linear time

```js
let array = [ 1, 2, 3, 4 ]

// unshift() and shift() has to re-index every single item in the array
[...array].unshift(0) // [ 0, 1, 2, 3, 4 ]
[...array].shift() // [ 2, 3, 4 ]
```

### Big O(n log n) - Log-Linear Time

Basically any built in code sorting function will use this algorithm for sorting.

```js
let array = [4, 9, 2, 7]
array.sort()
```
