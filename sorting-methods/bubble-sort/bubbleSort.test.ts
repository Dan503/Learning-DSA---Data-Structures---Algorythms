import { assertEquals } from 'jsr:@std/assert@1'
import { bubbleSortSinglePass } from './0-bubbleSort-singlePass.ts'
import { bubbleSortContanerLoop } from './1-bubbleSort-containerLoop.ts'

Deno.test('bubble sort single pass', () => {
	const input = [7, 12, 9, 11, 3]
	const expectedOutput = [7, 9, 11, 3, 12]

	assertEquals(
		bubbleSortSinglePass(input),
		expectedOutput,
		'Bubble single pass',
	)
})

Deno.test('bubble sort full version', () => {
	const input = [7, 12, 9, 11, 3]
	const expectedOutput = [3, 7, 9, 11, 12]

	assertEquals(
		bubbleSortContanerLoop(input),
		expectedOutput,
		'Bubble single pass',
	)
})
