import { assertEquals } from 'jsr:@std/assert@1'
import { createDoublyLinkedList } from '../list-types/doublyLinkedList.ts'
import { swapNodes } from './swapNodes.ts'
import { traverseForward } from './traversal.ts'

Deno.test('Swap nodes (unrelated)', () => {
	const { allNodes } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, node2, _node3, node4] = allNodes

	swapNodes(node2, node4)

	const outputItems: Array<number> = []
	traverseForward(node1, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [1, 4, 3, 2, 5])
})

Deno.test('Swap nodes (unrelated) [reverse]', () => {
	const { allNodes } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, node2, _node3, node4] = allNodes

	swapNodes(node4, node2)

	const outputItems: Array<number> = []
	traverseForward(node1, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [1, 4, 3, 2, 5])
})

Deno.test('Swap nodes (adjacent)', () => {
	const { allNodes } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, node2, node3] = allNodes

	swapNodes(node2, node3)

	const outputItems: Array<number> = []
	traverseForward(node1, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [1, 3, 2, 4, 5])
})

Deno.test('Swap nodes (adjacent) [reverse]', () => {
	const { allNodes } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, node2, node3] = allNodes

	swapNodes(node3, node2)

	const outputItems: Array<number> = []
	traverseForward(node1, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [1, 3, 2, 4, 5])
})

Deno.test('Swap nodes (headNode unrelated)', () => {
	const { allNodes } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, _node2, node3] = allNodes

	swapNodes(node1, node3)

	const outputItems: Array<number> = []
	traverseForward(node3, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [3, 2, 1, 4, 5])
})

Deno.test('Swap nodes (headNode unrelated) [reverse]', () => {
	const { allNodes } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, _node2, node3] = allNodes

	swapNodes(node3, node1)

	const outputItems: Array<number> = []
	traverseForward(node3, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [3, 2, 1, 4, 5])
})

Deno.test('Swap nodes (headNode adjacent)', () => {
	const { allNodes } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, node2] = allNodes

	swapNodes(node1, node2)

	const outputItems: Array<number> = []
	traverseForward(node2, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [2, 1, 3, 4, 5])
})

Deno.test('Swap nodes (headNode adjacent) [reverse]', () => {
	const { allNodes } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, node2] = allNodes

	swapNodes(node2, node1)

	const outputItems: Array<number> = []
	traverseForward(node2, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [2, 1, 3, 4, 5])
})

Deno.test('Swap nodes (tailNode unrelated)', () => {
	const { allNodes, tailNode } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, _node2, node3] = allNodes

	swapNodes(node3, tailNode)

	const outputItems: Array<number> = []
	traverseForward(node1, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [1, 2, 5, 4, 3])
})

Deno.test('Swap nodes (tailNode unrelated) [reverse]', () => {
	const { allNodes, tailNode } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, _node2, node3] = allNodes

	swapNodes(tailNode, node3)

	const outputItems: Array<number> = []
	traverseForward(node1, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [1, 2, 5, 4, 3])
})

Deno.test('Swap nodes (tailNode adjacent)', () => {
	const { headNode, tailNode } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})

	swapNodes(tailNode.prev!, tailNode)

	const outputItems: Array<number> = []
	traverseForward(headNode, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [1, 2, 3, 5, 4])
})
Deno.test('Swap nodes (tailNode adjacent) [reverse]', () => {
	const { headNode, tailNode } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})

	swapNodes(tailNode, tailNode.prev!)

	const outputItems: Array<number> = []
	traverseForward(headNode, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [1, 2, 3, 5, 4])
})

Deno.test('Swap nodes (head and tail)', () => {
	const { headNode, tailNode } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})

	swapNodes(headNode, tailNode)

	const outputItems: Array<number> = []
	traverseForward(tailNode, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [5, 2, 3, 4, 1])
})

Deno.test('Swap nodes (head and tail) [reverse]', () => {
	const { headNode, tailNode } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})

	swapNodes(tailNode, headNode)

	const outputItems: Array<number> = []
	traverseForward(tailNode, (node) => {
		outputItems.push(node.data)
	})

	assertEquals(outputItems, [5, 2, 3, 4, 1])
})
