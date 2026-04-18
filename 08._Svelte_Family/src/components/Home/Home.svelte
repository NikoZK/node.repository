<script>
    import { fridgeMessages } from '../../stores/fridgeStore.js'
</script>

{#each $fridgeMessages as fridgeMessage}
<p>{fridgeMessage.name}: {fridgeMessage.message}</p>
{/each}

<slot></slot>

<div id="welcome-mat">
<p> Go away!</p>
</div>



<style>
    #welcome-mat {
        background-color: pink;
        color: black;
        padding: 2em;
        margin: 0 20em 0 20em;
        border-radius: 0 0 2em 2em;
    }
</style>