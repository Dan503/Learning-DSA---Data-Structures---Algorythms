import { assertEquals } from 'jsr:@std/assert@1/equals'
import { insertionSort, shiftIfPrevLarger } from './insertionSort.ts'

Deno.test('shiftIfPrevLarger', () => {
	const array = [12, 7, 9, 11, 3]
	array.forEach((item, index) => {
		if (index === 0) {
			return
		}
		shiftIfPrevLarger(array, index)
		switch (index) {
			case 1:
				assertEquals(array, [7, 12, 9, 11, 3], 'index 1')
				break
			case 2:
				assertEquals(array, [7, 9, 12, 11, 3], 'index 2')
				break
			case 3:
				assertEquals(array, [7, 9, 11, 12, 3], 'index 3')
				break
			case 4:
				assertEquals(array, [3, 7, 9, 11, 12], 'index 4')
				break
		}
	})
})

Deno.test('insertionSort', () => {
	const array = [12, 7, 9, 11, 3]
	insertionSort(array)
	assertEquals(array, [3, 7, 9, 11, 12])
})
