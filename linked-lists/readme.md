# Linked Lists

## What are linked lists?

Linked lists are a series of objects that each reference the next element in the sequence.

Array version:

```js
const array = [1, 2, 3]
```

Linked list version:

```js
const node1 = {
	data: 1,
}
const node2 = {
	data: 2,
}
const node3 = {
	data: 3,
}
node1.next = node2
node2.next = node3
```

## Types of linked list

### Singly

Singly linked lists only define the `next` item.

```js
{
	data: 2,
	next: {
		data: 3
		next: { /* ... */ }
	}
}
```

### Doubly

Doubly linked lists define both the `next` and the `prev` item. These are easier to work with however they take up a large amount of memory relative to arrays and singly linked lists.

```js
{
	data: 2,
	prev: {
		data: 1,
		prev: null,
		next: {
			data: 2,
			// ...
		}
	},
	next: {
		data: 3
		prev: {
			data: 2,
			// ...
		}
		next: null
	}
}
```

## What is the point of a linked list?

In general, arrays are superior in every way, especially in JavaScript.

### Linked list _benefits_

These are the benefits that linked lists have over arrays though.

1. **Efficient Insertion and Removal of elements:** Linked lists are able to insert and remove elements from the start/middle with very little computing required. Arrays need to shift all later elements in the array to cover the gap. When dealing with large amounts of data, this is a costly exercise.
2. **Decentralized memory storage:** Arrays take up one large fixed block of memory whereas linked lists can have their elements scatted throughout the CPU memory randomly. This makes large data lists easier to store in CPU memory when they are in linked-list format because you do not run the risk of filling the current
3. **No fixed size limit:** in some programming languages like C++, arrays need to have their max size defined at the time of creation. This can lead to errors when you try to add more elements to the array than it can hold. Linked lists do not have this issue. (This is not an issue in JS)
4. **Unlimited links on a single node:** Linked lists have no predefined structure. You define the structure of your linked list. Linked lists can also have as many links to other nodes as you want.
5. **Useful for more complex data structures:** Graphs, Trees, Webs, and some caches benefit from the increased customisability of linked lists.

### Linked list _detriments_

There are many downsides to using linked lists:

1. **More code to implement**: Arrays are built directly into programming languages as first class citizens with plenty of efficient methods for utilizing them and accessing their values. Linked lists need to be manually created by hand and all utility functions for managing the linked list also need to be created by hand.
2. **Looking up elements is slow:** Arrays can look up specific elements instantly with `array[index]` notation. Linked lists have to search through every element in the list to find the element you are looking for.
3. **Total memory required is larger than arrays:** The total memory allocation needed to store a linked list is much larger than what is needed to store an array (especially a doubly array that needs to store both a `next` and a `prev` reference in each node).
4. **Sorting is inefficient:** Due to linked lists not being able to jump to specific points in the list with a single operation, linked lists are not able to use the most efficient sorting algorithms.

### Arrays when an element is removed

Arrays need to shift the index of every following element when an item is removed or added to the list.

```js
//         ^ remove 4
;[1, 2, 3, 4, 5, 6, 7, 8, 9]
//         |  <  <  <  <  < 5+ now must all shift left
```

### Linked lists when an element is removed

```js
{ 1, next: 2 }
{ 2, next: 3 }
{ 3, next: 4 } // << Remove
{ 4, next: 5 }
{ 5, next: null }
```

```js
{ 1, next: 2 }
{ 2, next: 4 } // << This was the only element that needed to change
{ 4, next: 5 }
{ 5, next: null }
```

## Sorting

Linked lists require you to navigate through each element one at a time.

It is not possible to jump to the middle of a linked list, so most of the more efficient sorting algorithms cannot be used to sort a linked list.

So this means that it is generally more efficient to sort arrays instead of sorting a linked list.

Doubly style linked lists are easier to sort and give more efficient sorting options than singly style linked lists.

Singly style linked lists need to be sorted using selection sort since you can never look back to the previous element in a singly linked list.

## In conclusion

Use a linked list data structure if you have a large amount of data that is frequently inserting and removing items from the list.

In all other circumstances, an array is the better option.
