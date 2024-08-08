import { DoublyNode } from '../list-types/doublyLinkedList.ts'
import { SinglyNode } from '../list-types/singlyLinkedList.ts'

// O(n)
export function traverseForward<NodeType extends SinglyNode | DoublyNode>(
	headNode: NodeType,
	onTraversal: (node: NodeType, index: number) => void,
	condition: (node: NodeType) => boolean = () => true,
) {
	let index = 0
	let currentNode: NodeType | null = headNode

	while (currentNode && condition(currentNode)) {
		onTraversal(currentNode, index)
		currentNode = currentNode.next as NodeType | null
		checkLimit(index++)
	}
}

// O(n)
export function traverseBackward(
	headNode: DoublyNode,
	onTraversal: (node: DoublyNode, index: number) => void,
	condition: (node: DoublyNode) => boolean = () => true,
) {
	let index = 0
	let currentNode: DoublyNode | null = headNode
	while (currentNode && condition(currentNode)) {
		onTraversal(currentNode, index)
		currentNode = currentNode.prev
		checkLimit(index++)
	}
}

function checkLimit(limiter: number) {
	if (limiter > 1000) {
		throw new Error('traversal limit reached')
	}
}
