import { assertEquals } from 'jsr:@std/assert@1/equals'
import { singlyNodeHead } from './singlyLinkedList.ts'
import { traverseBackward, traverseForward } from './traversal.ts'
import { singlyCircularNodeHead } from './singlyCircularLinkedList.ts'
import { doublyNodeHead, doublyNodeTail } from './doublyLinkedList.ts'
import {
	doublyCircularNodeHead,
	doublyCircularNodeTail,
} from './doublyCircularLinkedList.ts'

Deno.test('Singly forward traversal', () => {
	const outputItems: Array<number> = []
	traverseForward(singlyNodeHead, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [3, 5, 13, 2])
})

Deno.test('Singly circular forward traversal', () => {
	const outputItems: Array<number> = []
	let loop = 0

	traverseForward(
		singlyCircularNodeHead,
		(node) => {
			outputItems.push(node.data)
			if (node === singlyCircularNodeHead) loop++
		},
		() => loop <= 3,
	)

	assertEquals(outputItems, [3, 5, 13, 2, 3, 5, 13, 2, 3, 5, 13, 2, 3])
})

// Singly does not support backwards traversal

Deno.test('Doubly forward traversal', () => {
	const outputItems: Array<number> = []
	traverseForward(doublyNodeHead, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [3, 5, 13, 2])
})

Deno.test('Doubly circular forward traversal', () => {
	const outputItems: Array<number> = []
	let loop = 0

	traverseForward(
		doublyCircularNodeHead,
		(node) => {
			outputItems.push(node.data)
			if (node === doublyCircularNodeHead) loop++
		},
		() => loop <= 3,
	)

	assertEquals(outputItems, [3, 5, 13, 2, 3, 5, 13, 2, 3, 5, 13, 2, 3])
})

Deno.test('Doubly backwards traversal', () => {
	const outputItems: Array<number> = []
	traverseBackward(doublyNodeTail, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [2, 13, 5, 3])
})

Deno.test('Doubly circular backwards traversal', () => {
	const outputItems: Array<number> = []
	let loop = 0

	traverseBackward(
		doublyCircularNodeTail,
		(node) => {
			outputItems.push(node.data)
			if (node === doublyCircularNodeTail) loop++
		},
		() => loop <= 3,
	)

	assertEquals(outputItems, [2, 13, 5, 3, 2, 13, 5, 3, 2, 13, 5, 3, 2])
})
