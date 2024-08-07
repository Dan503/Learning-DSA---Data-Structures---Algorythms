import { DoublyNode } from './doublyLinkedList.ts'
import { SinglyNode } from './singlyLinkedList.ts'

export function insertNodeAfter<NodeType extends SinglyNode | DoublyNode>(
	insertAfterNode: NodeType,
	nodeToInsert: NodeType,
) {
	const nextNode = insertAfterNode.next
	nodeToInsert.next = nextNode
	insertAfterNode.next = nodeToInsert
}
