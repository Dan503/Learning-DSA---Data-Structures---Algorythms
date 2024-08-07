import { assertEquals } from 'jsr:@std/assert@1/equals'
import {
	createSinglyLinkedList,
	SinglyNode,
	singlyNodeHead,
} from './singlyLinkedList.ts'
import { traverseBackward, traverseForward } from './traversal.ts'
import { singlyCircularNodeHead } from './singlyCircularLinkedList.ts'
import {
	createDoublyLinkedList,
	DoublyNode,
	doublyNodeHead,
	doublyNodeTail,
} from './doublyLinkedList.ts'
import {
	doublyCircularNodeHead,
	doublyCircularNodeTail,
} from './doublyCircularLinkedList.ts'
import { findLowestLinkedListValue } from './findLowestValue.ts'
import { deleteDoublyNode, deleteSinglyNode } from './deleteNode.ts'

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

Deno.test('find lowest value (singular)', () => {
	assertEquals(findLowestLinkedListValue(singlyNodeHead), new SinglyNode(2))
})

Deno.test('find lowest value (circular)', () => {
	assertEquals(findLowestLinkedListValue(singlyCircularNodeHead).data, 2)
})

Deno.test('Delete singly node', () => {
	const { allNodes } = createSinglyLinkedList([3, 5, 13, 2])
	const [node1, node2] = allNodes

	deleteSinglyNode(node1, node2)

	const outputItems: Array<number> = []
	traverseForward(node1, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [3, 13, 2])

	deleteSinglyNode(node1, node1)

	assertEquals(node1.next, null)
	// cannot remove explicitly from memory in JS
	// When the variable is no longer used, garbage collection will free up the memory for us
	// assertEquals(node2, null)
})

Deno.test('Delete doubly node', () => {
	const { allNodes } = createDoublyLinkedList([3, 5, 13, 2])
	const [node1, node2] = allNodes

	deleteDoublyNode(node2)

	const outputItems: Array<number> = []
	traverseForward(node1, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [3, 13, 2])

	assertEquals(node2.next, null)
	assertEquals(node2.prev, null)
})
