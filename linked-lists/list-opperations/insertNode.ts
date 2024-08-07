import { DoublyNode } from '../list-types/doublyLinkedList.ts'
import { SinglyNode } from '../list-types/singlyLinkedList.ts'

export function insertNodeAfter<NodeType extends SinglyNode | DoublyNode>(
	insertAfterNode: NodeType,
	nodeToInsert: NodeType,
) {
	const nextNode = insertAfterNode.next
	nodeToInsert.next = nextNode
	insertAfterNode.next = nodeToInsert
}
