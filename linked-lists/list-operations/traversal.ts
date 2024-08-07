import { DoublyNode } from '../list-types/doublyLinkedList.ts'
import { SinglyNode } from '../list-types/singlyLinkedList.ts'

// O(n)
export function traverseForward<NodeType extends SinglyNode | DoublyNode>(
	headNode: NodeType,
	onTraversal: (node: NodeType) => void,
	condition: (node: NodeType) => boolean = () => true,
) {
	let currentNode: NodeType | null = headNode

	while (currentNode && condition(currentNode)) {
		onTraversal(currentNode)
		currentNode = currentNode.next as NodeType
	}
}

// O(n)
export function traverseBackward(
	headNode: DoublyNode,
	onTraversal: (node: DoublyNode) => void,
	condition: (node: DoublyNode) => boolean = () => true,
) {
	let currentNode: DoublyNode | null = headNode
	while (currentNode && condition(currentNode)) {
		onTraversal(currentNode)
		currentNode = currentNode.prev
	}
}
