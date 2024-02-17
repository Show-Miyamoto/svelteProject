<script>
    import { toDoItems } from "./store.js"

    export let userName
    let newItem = ""

    // Receive notification of status changes using the subscribe method
    function addToList() {
        $toDoItems = [...$toDoItems, {text: newItem, status: false}]
        newItem = ""
    }
</script>

<input bind:value={newItem} type="text" placeholder="新しく追加するタスク">
<button on:click={addToList}>追加</button>

<h3>{userName}のタスクリスク:</h3>