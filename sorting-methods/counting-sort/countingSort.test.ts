import { assertEquals } from 'jsr:@std/assert@1/equals'
import { gatherIntoCountingArray } from './1-gather-into-counting-array.ts'
import { unpackCountingArray } from './2-unpack-counting-array.ts'
import { countingSort } from './3-countingSort.ts'

const unsortedArray = [4, 1, 3, 4, 3, 4, 1, 3, 3, 4, 3, 3]
const countingArray: Array<number | undefined> = [, 2, , 6, 4]
const sortedArray: Array<number> = [1, 1, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4]

Deno.test('Gather into counting array', () => {
	assertEquals(gatherIntoCountingArray(unsortedArray), countingArray)
})

Deno.test('Unpack counting array', () => {
	assertEquals(unpackCountingArray(countingArray), sortedArray)
})

Deno.test('Full counting sort', () => {
	assertEquals(countingSort(unsortedArray), sortedArray)
})
