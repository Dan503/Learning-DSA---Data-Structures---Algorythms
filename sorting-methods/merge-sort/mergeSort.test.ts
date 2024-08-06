import { assertEquals } from 'jsr:@std/assert@1/equals'
import { splitArrayInHalf } from './1-splitArrayInHalf.ts'
// import { recursiveBreakArrayDown } from './mergeSort.ts'
import { mergeArrays } from './2-mergeArraysTogether.ts'
import { mergeSort } from './3-mergeSort.ts'

const initialArray = [12, 8, 9, 3, 11, 5, 4]
const splitArray: [number[], number[]] = [
	[12, 8, 9],
	[3, 11, 5, 4],
]
const sortedSplitArray = [
	[8, 9, 12],
	[3, 4, 5, 11],
]

const sortedArray = [3, 4, 5, 8, 9, 11, 12]

Deno.test('Split array in half', () => {
	assertEquals(splitArrayInHalf(initialArray), splitArray)
})

Deno.test('Merge arrays together', () => {
	assertEquals(
		mergeArrays(sortedSplitArray[0], sortedSplitArray[1]),
		sortedArray,
	)
})

Deno.test('Recursively sort the array using merge-sort', () => {
	assertEquals(mergeSort(initialArray), sortedArray)
})

/*

split steps
[12,   8,   9,     3,   11,   5,   4] <- initial array
[12,   8,   9], | [3,   11,   5,   4]
[12], [8,   9], | [3,   11], [5,   4]
[12], [8], [9], | [3], [11], [5], [4]  <- fully dismantled array

merge steps
[12],  {[8], [9]} | {[3], [11]}, {[5], [4]}
{[12],  [8,   9]} | {[3,   11],   [4,   5]}
{[8,   9    12]   |  [3,    4,     5,  11]}
[ 3,   4,   5,        8,    9,     11,  12 ] <- Fully sorted

*/
