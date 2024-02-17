<script>
    import { toDoItems } from "./store.js"
    import { onMount } from "svelte"

    export let userName
    let newItem = ""
    let newItemInputForm = null

    onMount(() => {
        newItemInputForm.focus()
    })

    function addToList() {
        $toDoItems = [...$toDoItems, {text: newItem, status: false}]
        newItme  = ""
    }
</script>

<!-- "bind:this" -> Renting is done after onMount is executed-->
<input bind:value={newItem} bind:this={newItemInputForm} type="text" placeholder="新しく追加するタスク">
<button on:click={addToList}>追加</button>

<h3>{userName}のタスクリスク:</h3>