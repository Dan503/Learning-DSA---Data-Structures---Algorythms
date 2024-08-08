import { DoublyNode } from '../list-types/doublyLinkedList.ts'
import { SinglyNode } from '../list-types/singlyLinkedList.ts'

export function insertNodeAfter<NodeType extends SinglyNode | DoublyNode>(
	insertAfterNode: NodeType,
	nodeToInsert: NodeType,
) {
	if ('prev' in nodeToInsert && 'prev' in insertAfterNode) {
		nodeToInsert.prev = insertAfterNode
		if (insertAfterNode.next) {
			insertAfterNode.next.prev = nodeToInsert
		}
	}

	const nextNode = insertAfterNode.next
	nodeToInsert.next = nextNode
	insertAfterNode.next = nodeToInsert
}
