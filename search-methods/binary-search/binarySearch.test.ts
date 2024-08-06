import { assertEquals } from 'jsr:@std/assert@1/equals'
import { binaryIndexSearch } from './binarySearch.ts'

const array = [2, 3, 7, 7, 11, 15, 25]

Deno.test('binary search (high)', () => {
	assertEquals(binaryIndexSearch(array, 15), 5)
})

Deno.test('binary search (low)', () => {
	assertEquals(binaryIndexSearch(array, 3), 1)
})

Deno.test('binary search (not found)', () => {
	assertEquals(binaryIndexSearch(array, 8), -1)
})
