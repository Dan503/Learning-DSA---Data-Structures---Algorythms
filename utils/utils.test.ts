import { assertEquals } from 'jsr:@std/assert@1'
import { swapArrayValues } from './utils.ts'

Deno.test('swapArrayValues', () => {
	const array = [1, 2, 3, 4]
	swapArrayValues(array, 1, 2)
	assertEquals(array, [1, 3, 2, 4])
})
