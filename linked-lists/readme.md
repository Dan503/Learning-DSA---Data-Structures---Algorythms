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

## In conclusion

Use a linked list data structure if you have a large amount of data that is frequently inserting and removing items from the list.

In all other circumstances, an array is the better option.
