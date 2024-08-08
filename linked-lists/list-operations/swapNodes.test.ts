import { assertEquals } from 'jsr:@std/assert@1'
import { createDoublyLinkedList } from '../list-types/doublyLinkedList.ts'
import { swapNodes } from './swapNodes.ts'
import { traverseForward } from './traversal.ts'

function limitCheck(limiter: number) {
	if (limiter > 100) {
		throw new Error('infinite recursion detected')
	}
}

Deno.test('Swap nodes (unrelated)', () => {
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
		limitCheck(i++)
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
	let i = 0
	traverseForward(node1, (node) => {
		console.log(i, node)
		outputItems.push(node.data)
		limitCheck(i++)
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
	let i = 0
	traverseForward(node1, (node) => {
		console.log(i, node)
		outputItems.push(node.data)
		limitCheck(i++)
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
	let i = 0
	traverseForward(node1, (node) => {
		console.log(i, node)
		outputItems.push(node.data)
		limitCheck(i++)
	})

	assertEquals(outputItems, [1, 3, 2, 4, 5])
})

Deno.test('Swap nodes (headNode swap)', () => {
	const { allNodes } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, node3] = allNodes

	swapNodes(node1, node3)

	const outputItems: Array<number> = []
	let i = 0
	traverseForward(node3, (node) => {
		console.log(i, node)
		outputItems.push(node.data)
		limitCheck(i++)
	})

	assertEquals(outputItems, [3, 2, 1, 4, 5])
})

Deno.test('Swap nodes (headNode swap) [reverse]', () => {
	const { allNodes } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, node3] = allNodes

	swapNodes(node3, node1)

	const outputItems: Array<number> = []
	let i = 0
	traverseForward(node3, (node) => {
		console.log(i, node)
		outputItems.push(node.data)
		limitCheck(i++)
	})

	assertEquals(outputItems, [3, 2, 1, 4, 5])
})

Deno.test('Swap nodes (tailNode swap)', () => {
	const { allNodes, tailNode } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, node3] = allNodes

	swapNodes(node3, tailNode)

	const outputItems: Array<number> = []
	let i = 0
	traverseForward(node1, (node) => {
		console.log(i, node)
		outputItems.push(node.data)
		limitCheck(i++)
	})

	assertEquals(outputItems, [1, 2, 5, 4, 3])
})
Deno.test('Swap nodes (tailNode swap) [reverse]', () => {
	const { allNodes, tailNode } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})
	const [node1, node3] = allNodes

	swapNodes(tailNode, node3)

	const outputItems: Array<number> = []
	let i = 0
	traverseForward(node1, (node) => {
		console.log(i, node)
		outputItems.push(node.data)
		limitCheck(i++)
	})

	assertEquals(outputItems, [1, 2, 5, 4, 3])
})

Deno.test('Swap nodes (head and tail)', () => {
	const { headNode, tailNode } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})

	swapNodes(headNode, tailNode)

	const outputItems: Array<number> = []
	let i = 0
	traverseForward(tailNode, (node) => {
		console.log(i, node)
		outputItems.push(node.data)
		limitCheck(i++)
	})

	assertEquals(outputItems, [5, 2, 3, 4, 1])
})

Deno.test('Swap nodes (head and tail) [reverse]', () => {
	const { headNode, tailNode } = createDoublyLinkedList([1, 2, 3, 4, 5], {
		isCircular: false,
	})

	swapNodes(tailNode, headNode)

	const outputItems: Array<number> = []
	let i = 0
	traverseForward(tailNode, (node) => {
		console.log(i, node)
		outputItems.push(node.data)
		limitCheck(i++)
	})

	assertEquals(outputItems, [5, 2, 3, 4, 1])
})
