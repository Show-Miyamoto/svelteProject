import { writable } from "svelte/store"

// Synchronize from each component toDoItems
export const toDoItems = writable([
    {text: 'garbage disposal'},
    {text: 'Learn programing'},
    {text: 'Contact a friend'},
])

