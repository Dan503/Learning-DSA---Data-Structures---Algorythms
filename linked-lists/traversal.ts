import { DoublyNode } from './doublyLinkedList.ts'
import { SinglyNode } from './singlyLinkedList.ts'

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
