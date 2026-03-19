<script>
    let { name, familySheep, isGirl } = $props()
</script>

<div class={familySheep || "not-a-sheep"}
class:is-girl={isGirl}
class:is-boy={!isGirl}
>
<h3>I am just a child(KEEP AWAY FROM MAMO AT ALL COSTS) known as: {name}</h3>
</div>

<style>
    div {
        color: wheat;
    }
    .black {
        background-color: rebeccapurple;
    }
    .grey {
        background-color: yellow;
    }
    .not-a-sheep {
        background-color: grey;
    }
    .is-girl {
        border: 4px  solid pink
    }
    .is-boy {
        border: 4px  solid blue
    }
</style>