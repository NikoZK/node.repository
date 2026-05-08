<script>
import { nickname } from "../stores/nicknameStore.js"
import Register from '../components/Register/Register.svelte'
import Colors from '../components/Colors/Colors.svelte'
import { onMount } from "svelte";

  onMount(() => {
    const localStorageNickname = localStorage.getItem('nickname')
    if (localStorage) {
      nickname.set(localStorageNickname)
    }
  })
</script>

{#if !$nickname }
<Register/>
{:else}
<Colors/>
{/if}