import { assertEquals } from 'jsr:@std/assert@1/equals'
import { radixSort } from './radixSort.ts'
import { moveIntoNumberBuckets } from './1-moveIntoNumberBuckets.ts'

const unsortedArray = [566, 574, 399, 379, 338, 510, 372, 350, 505, 215]
const sortedArray = [215, 338, 350, 372, 379, 399, 505, 510, 566, 574]

Deno.test('1 - moveIntoNumberBuckets', () => {
	assertEquals(moveIntoNumberBuckets(unsortedArray, 3), [
		[510, 350], // 0
		[], // 1
		[372], // 2
		[], // 3
		[574], // 4
		[505, 215], // 5
		[566], // 6
		[], // 7
		[338], // 8
		[399, 379], // 9
	])
})

Deno.test('Radix sort', () => {
	assertEquals(radixSort(unsortedArray), sortedArray)
})
