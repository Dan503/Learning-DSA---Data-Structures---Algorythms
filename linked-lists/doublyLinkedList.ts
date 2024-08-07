export class DoublyNode {
	data: number
	next: null | DoublyNode = null
	prev: null | DoublyNode = null

	constructor(data: number) {
		this.data = data
	}
}

/**
 * Shouldn't actually use arrays when creating linked lists.
 * This is because it ends up using twice as much memory to store the linked list.
 * Using this because I need to make a lot of linked lists, I don't want to do it manually, and I'm using small numbers of elements.
 */
export function createDoublyLinkedList(
	numbers: Array<number>,
	{ isCircular = false }: { isCircular?: boolean } = {},
) {
	const listItems = numbers.map((number) => new DoublyNode(number))

	listItems.forEach((item, index) => {
		item.next = listItems[index + 1] || null
		item.prev = listItems[index - 1] || null
	})

	if (isCircular) {
		listItems[listItems.length - 1].next = listItems[0]
	}

	return {
		headNode: listItems[0],
		tailNode: listItems[listItems.length - 1],
	}
}

export const { headNode, tailNode } = createDoublyLinkedList([3, 5, 13, 2], {
	isCircular: false,
})

// Long way to create a doubly linked list

// const node1 = new DoublyNode(3)
// const node2 = new DoublyNode(5)
// const node3 = new DoublyNode(13)
// const node4 = new DoublyNode(2)

// node1.next = node2

// node2.prev = node1
// node2.next = node3

// node3.prev = node2
// node3.next = node4

// node4.prev = node3

export const doublyNodeHead = headNode
export const doublyNodeTail = tailNode
