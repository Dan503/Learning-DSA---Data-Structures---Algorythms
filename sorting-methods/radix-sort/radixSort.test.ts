import { assertEquals } from 'jsr:@std/assert@1/equals'
import { radixSort } from './radixSort.ts'
import { moveIntoNumberBuckets } from './1-moveIntoNumberBuckets.ts'
import { unpackNumberBuckets } from './2-unpackNumberBuckets.ts'

const unsortedArray = [566, 74, 399, 379, 338, 1, 372, 350, 505, 215]

const firstNumberBucketSet = [
	[350], // 0
	[1], // 1
	[372], // 2
	[], // 3
	[74], // 4
	[505, 215], // 5
	[566], // 6
	[], // 7
	[338], // 8
	[399, 379], // 9
]

const firstSortingResult = [350, 1, 372, 74, 505, 215, 566, 338, 399, 379]

const secondNumberBucketSet = [
	[1, 505], // 0
	[215], // 1
	[], // 2
	[338], // 3
	[], // 4
	[350], // 5
	[566], // 6
	[372, 74, 379], // 7
	[], // 8
	[399], // 9
]

const secondSortingResult = [1, 505, 215, 338, 350, 566, 372, 74, 379, 399]

const thirdNumberBucketSet = [
	[1, 74], // 0
	[], // 1
	[215], // 2
	[338, 350, 372, 379, 399], // 3
	[], // 4
	[505, 566], // 5
	[], // 6
	[], // 7
	[], // 8
	[], // 9
]

const finalSortedArray = [1, 74, 215, 338, 350, 372, 379, 399, 505, 566]

Deno.test('1 - moveIntoNumberBuckets (3)', () => {
	assertEquals(
		moveIntoNumberBuckets(unsortedArray, 3, 3),
		firstNumberBucketSet,
	)
})

Deno.test('2 - unpackNumberBuckets', () => {
	assertEquals(unpackNumberBuckets(firstNumberBucketSet), firstSortingResult)
})

Deno.test('3 - moveIntoNumberBuckets (2)', () => {
	assertEquals(
		moveIntoNumberBuckets(firstSortingResult, 2, 3),
		secondNumberBucketSet,
	)
})

Deno.test('4 - unpackNumberBuckets', () => {
	assertEquals(
		unpackNumberBuckets(secondNumberBucketSet),
		secondSortingResult,
	)
})

Deno.test('5 - moveIntoNumberBuckets (1)', () => {
	assertEquals(
		moveIntoNumberBuckets(secondSortingResult, 1, 3),
		thirdNumberBucketSet,
	)
})

Deno.test('6 - unpackNumberBuckets', () => {
	assertEquals(unpackNumberBuckets(thirdNumberBucketSet), finalSortedArray)
})

Deno.test('Radix sort', () => {
	assertEquals(radixSort(unsortedArray, 3), finalSortedArray)
})
