import {
	createDoublyLinkedList,
	DoublyNode,
} from '../list-types/doublyLinkedList.ts'
import { detachDoublyNode } from './deleteNode.ts'
import { traverseForward } from './traversal.ts'

export function swapNodes(node1: DoublyNode, node2: DoublyNode) {
	const prevNodeA = node1.prev
	const prevNodeB = node2.prev

	const nextNodeA = node1.next
	const nextNodeB = node2.next

	// remove the nodes from the chain without destroying the old next/prev data from the nodes
	detachDoublyNode(node1)
	detachDoublyNode(node2)

	// Apply the new prev and next values to the nodes
	node1.prev = prevNodeB
	node1.next = nextNodeB
	node2.prev = prevNodeA
	node2.next = nextNodeA

	//re-insert them into the array
	if (prevNodeA) prevNodeA.next = node2
	if (prevNodeB) prevNodeB.next = node1
	if (nextNodeA) nextNodeA.prev = node2
	if (nextNodeB) nextNodeB.prev = node1
}

// 1 <2> 3 [4] 5
// 1 [4] 3 <2> 5
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
