import { assertEquals } from 'jsr:@std/assert@1/equals'
import { linearIndexSearch } from './linearSearch.ts'

Deno.test('Linear search', () => {
	assertEquals(linearIndexSearch([12, 8, 9, 11, 5, 11], 5), 4)
})
Deno.test('Linear search (not found)', () => {
	assertEquals(linearIndexSearch([12, 8, 9, 11, 5, 11], 18), -1)
})
