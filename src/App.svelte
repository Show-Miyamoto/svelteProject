<!-- npm run devで実行。localhost:8080で確認 -->
<script>
	import ToDoInputForm from "./ToDoInputForm.svelte"
	import ToDoList from "./ToDoList.svelte"
	let nameEntered = false  // 名前が入力されたかどうかのフラグ。false->if文のelseが実行

	let lastName = ""
	let firstName = ""

	$: fullName = lastName + " " + firstName

	function handleSubmit() {
		if (lastName && firstName) {
		nameEntered = true
		}
	}
</script>

<main>
{#if nameEntered}
	<h1>タスクリストアプリケーションへようこそ、{fullName}さん！！</h1>
	<ToDoInputForm userName={fullName} />
	<ToDoList />
{:else}
	<h1>タスクリストアプリケーションへようこそ！！</h1>
	<h3>名前を入力してください</h3>
	<form on:submit|preventDefault={handleSubmit}>
	<div>
		<input bind:value={lastName} type="text" placeholder="姓" required>
	</div>
	<div>
		<input bind:value={firstName} type="text" placeholder="名" required>
	</div>
	<button type="submit">タスク管理を始める</button>
	</form>
{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 450px;
		margin: 0 auto;
	}

	h1 {
		color: blue;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>