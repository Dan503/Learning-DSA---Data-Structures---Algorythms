export class SinglyNode {
	data: number
	next: null | SinglyNode = null

	constructor(data: number) {
		this.data = data
	}
}

/**
 * Shouldn't actually use arrays when creating linked lists.
 * This is because it ends up using twice as much memory to store the linked list.
 * Using this because I need to make a lot of linked lists, I don't want to do it manually, and I'm using small numbers of elements.
 */
export function createSinglyLinkedList(
	numbers: Array<number>,
	{ isCircular = false }: { isCircular?: boolean } = {},
) {
	const listItems = numbers.map((number) => new SinglyNode(number))

	listItems.forEach((item, index) => {
		item.next = listItems[index + 1] || null
	})

	if (isCircular) {
		listItems[listItems.length - 1].next = listItems[0]
	}

	return {
		headNode: listItems[0],
		tailNode: listItems[listItems.length - 1],
	}
}

const { headNode, tailNode } = createSinglyLinkedList([3, 5, 13, 2])

// The long way of creating a Singly linked list

// const node1 = new SinglyNode(3)
// const node2 = new SinglyNode(5)
// const node3 = new SinglyNode(13)
// const node4 = new SinglyNode(2)

// node1.next = node2
// node2.next = node3
// node3.next = node4

export const singlyNodeHead = headNode
export const singlyNodeTail = tailNode
