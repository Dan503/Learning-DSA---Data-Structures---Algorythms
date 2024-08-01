import { assertEquals } from 'jsr:@std/assert@1/equals'
import { fibonacciLoop } from './fibonacci-loop.ts'
// import { fibonacciFind } from './fibonacci-find.ts'
// import { fibonacciRecursion } from './fibonacci-recursion.ts'

const fibonacciSequence = [
	0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
	2584, 4181,
]

Deno.test('fibonacci loop', () => {
	assertEquals(
		fibonacciLoop(fibonacciSequence.length),
		fibonacciSequence,
		`loop`,
	)
})

// Deno.test('fibonacci recursion', () => {
// 	assertEquals(
// 		fibonacciRecursion(fibonacciSequence.length),
// 		fibonacciSequence,
// 		`recurse`,
// 	)
// })

// Deno.test('fibonacci find', () => {
// 	fibonacciSequence.forEach((number, index) => {
// 		assertEquals(fibonacciFind(index), number, `find ${index}:${number}`)
// 	})
// })
