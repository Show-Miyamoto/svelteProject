<script>
    import { toDoItems } from "./store.js"

    // Auto subscribe used
    function removeFromList(i) {
        $toDoItems.splice(i, 1)
        $toDoItems = $toDoItems
    }
</script>

{#each $toDoItems as item, index}
    <div class="toDoItems">
        <input bind:checked={item.status} type="checkbox">
        <span class:checked={item.status}>{item.text}</span>
        <button on:click={() => removeFromList(index)}>削除</button>
        <br/>
    </div>
{/each}

<style>
    .checked {
        text-decoration: line-through;
    }
    .toDoItems {
        text-align: left;
    }
</style>