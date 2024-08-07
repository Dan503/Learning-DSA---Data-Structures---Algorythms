import { DoublyNode } from './doublyLinkedList.ts'
import { SinglyNode } from './singlyLinkedList.ts'

interface CreateLinkedListReturn<
	IsSingly extends boolean,
	NodeType extends SinglyNode | DoublyNode = IsSingly extends true
		? SinglyNode
		: DoublyNode,
> {
	headNode: NodeType
	tailNode: NodeType
	allNodes: Array<NodeType>
}

/**
 * Shouldn't actually use arrays when creating linked lists.
 * This is because it ends up using twice as much memory to store the linked list.
 *
 * Using this because:
 * - I need to make a lot of linked lists
 * - I don't want to do it manually
 * - I'm using small numbers of elements
 */
export function createLinkedList<IsSingly extends boolean>(
	numbers: Array<number>,
	{
		isCircular = false,
		isSingly,
	}: { isCircular?: boolean; isSingly: IsSingly },
): CreateLinkedListReturn<IsSingly> {
	type NodeType = IsSingly extends true ? SinglyNode : DoublyNode

	const listItems = numbers.map((number) =>
		isSingly ? new DoublyNode(number) : new SinglyNode(number),
	)

	listItems.forEach((item, index) => {
		item.next = listItems[index + 1] || null

		if ('prev' in item) {
			item.prev = (listItems[index - 1] as DoublyNode) || null
		}
	})

	if (isCircular) {
		listItems[listItems.length - 1].next = listItems[0]
	}

	return {
		headNode: listItems[0] as NodeType,
		tailNode: listItems[listItems.length - 1] as NodeType,
		allNodes: listItems as Array<NodeType>,
	}
}
