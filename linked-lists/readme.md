# What is the point of a linked list?

In general, arrays are superior in every way.

There is 1 benefit that linked lists have over arrays though.

Linked lists are able to insert and remove elements with very little computing required.

## Arrays when an element is removed

Arrays need to shift the index of every following element when an item is removed or added to the list.

```js
//         ^ remove 4
;[1, 2, 3, 4, 5, 6, 7, 8, 9]
//            <  <  <  <  < 5+ now must all shift left
```

## Linked lists when an element is removed

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

## Sorting

Linked lists require you to navigate through each element one at a time.

It is not possible to jump to the middle of a linked list, so most of the more efficient sorting algorithms cannot be used to sort a linked list.

So this means that it is generally more efficient to sort arrays instead of sorting a linked list.

Doubly style linked lists are easier to sort and give more efficient sorting options than singly style linked lists.

Singly style linked lists need to be sorted using selection sort since you can never look back to the previous element in a singly linked list.

## In conclusion

Use a linked list data structure if you have a large amount of data that is frequently inserting and removing items from the list.

In all other circumstances, an array is the better option.
