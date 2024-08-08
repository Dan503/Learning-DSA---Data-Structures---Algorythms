import { assertEquals } from 'jsr:@std/assert@1/equals'
import {
	deleteDoublyNode,
	deleteSinglyNode,
} from './list-operations/deleteNode.ts'
import {
	doublyCircularNodeHead,
	doublyCircularNodeTail,
} from './list-types/doublyCircularLinkedList.ts'
import {
	createDoublyLinkedList,
	DoublyNode,
	doublyNodeHead,
	doublyNodeTail,
} from './list-types/doublyLinkedList.ts'
import { findLowestLinkedListValue } from './list-operations/findLowestValue.ts'
import { insertNodeAfter } from './list-operations/insertNode.ts'
import { singlyCircularNodeHead } from './list-types/singlyCircularLinkedList.ts'
import {
	createSinglyLinkedList,
	SinglyNode,
	singlyNodeHead,
} from './list-types/singlyLinkedList.ts'
import {
	traverseBackward,
	traverseForward,
} from './list-operations/traversal.ts'
import { swapNodes } from './list-operations/swapNodes.ts'
import { linkedListInsertionSort } from './list-operations/linkedListInsertionSort.ts'

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

Deno.test('Insert singly node', () => {
	const { allNodes } = createSinglyLinkedList([3, 5, 13, 2])
	const [node1, node2] = allNodes
	const { headNode } = createSinglyLinkedList([22])

	insertNodeAfter(node2, headNode)

	const outputItems: Array<number> = []
	traverseForward(node1, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [3, 5, 22, 13, 2])
})

Deno.test('Insert doubly node', () => {
	const { allNodes } = createDoublyLinkedList([3, 5, 13, 2])
	const [node1, node2] = allNodes
	const { headNode } = createDoublyLinkedList([22])

	insertNodeAfter(node2, headNode)

	const outputItems: Array<number> = []
	traverseForward(node1, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [3, 5, 22, 13, 2])
})

Deno.test('Swap doubly nodes', () => {
	const { allNodes } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, node2, _node3, node4] = allNodes

	swapNodes(node2, node4)

	const outputItems: Array<number> = []
	let i = 0
	traverseForward(node1, (node) => {
		console.log(i, node)
		outputItems.push(node.data)
		i++
	})

	assertEquals(outputItems, [1, 4, 3, 2, 5])
})

Deno.test('doubly insertion sort', () => {
	const { headNode } = createDoublyLinkedList([3, 5, 13, 2])

	linkedListInsertionSort(headNode)

	let newHead: DoublyNode | null = null

	const outputItems: Array<number> = []
	traverseBackward(headNode, (node) => {
		if (!node.prev) newHead = node
	})

	if (newHead) {
		traverseForward(newHead as DoublyNode, (node) => {
			outputItems.push(node.data)
		})
	}

	assertEquals(outputItems, [2, 3, 5, 13])
})
