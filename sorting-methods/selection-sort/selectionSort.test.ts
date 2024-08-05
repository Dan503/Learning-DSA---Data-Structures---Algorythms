import { assertEquals } from 'jsr:@std/assert@1'
import { selectionSortSinglePass } from './1-selectionSort-SinglePass.ts'
import { selectionSort } from './2-selectionSort.ts'

Deno.test('selection sort single pass', () => {
	assertEquals(
		selectionSortSinglePass([7, 12, 9, 11, 3], 0),
		[3, 12, 9, 11, 7],
	)
})

Deno.test('selection sort full thing', () => {
	assertEquals(selectionSort([7, 12, 9, 11, 3]), [3, 7, 9, 11, 12])
})
