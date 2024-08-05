import { assertEquals } from 'jsr:@std/assert@1/equals'
import { gatherIntoCountingArray } from './1-gather-into-counting-array.ts'
import { unpackCountingArray } from './2-unpack-counting-array.ts'
import { countingSort } from './countingSort.ts'

const unsortedArray = [4, 1, 3, 9, 3, 4, 1, 9, 3, 9]
const countingArray: Array<number | undefined> = [, 2, , 3, 2, , , , , 3]
const sortedArray: Array<number> = [1, 1, 3, 3, 3, 4, 4, 9, 9, 9]

Deno.test('Gather into counting array', () => {
	assertEquals(gatherIntoCountingArray(unsortedArray), countingArray)
})

Deno.test('Unpack counting array', () => {
	assertEquals(unpackCountingArray(countingArray), sortedArray)
})

Deno.test('Full counting sort', () => {
	assertEquals(countingSort(unsortedArray), sortedArray)
})
