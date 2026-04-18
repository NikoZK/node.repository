<script>
    let { name, familySheep, isGirl, onShowLove,  onEatCookie, monsterFridge = $bindable() } = $props()
    
    import { fridgeMessages } from "../../stores/fridgeStore.js";

    let fridgeMessageInput = $state("")
    function handleSubmitFridgeMessage() {
        const fridgeMessageToCreate = {
            name,
            message: fridgeMessageInput
        }
        //$fridgeMessages.push(fridgeMessageToCreate)
        //fridgeMessages.set($fridgeMessages)
        //fridgeMessageInput = ""

        fridgeMessages.update((fridgeMessageStoreValue) => {
            fridgeMessageStoreValue.push(fridgeMessageToCreate)
            return fridgeMessageStoreValue
        })

        fridgeMessageInput = ""
    }

</script>

<div class={familySheep || "not-a-sheep"}
class:is-girl={isGirl}
class:is-boy={!isGirl}
>
<h3>I am just a child(KEEP AWAY FROM MAMO AT ALL COSTS) known as: {name}</h3>
</div>

<button onclick={() => onShowLove(name)}> Show Love😍 </button>
<button onclick={onEatCookie}> Eat cookie </button>
<button onclick={() => monsterFridge.pop()}> Drink da monner </button>
<br>
<br>
<input bind:value={fridgeMessageInput} placeholder="enter message">
<button onclick={handleSubmitFridgeMessage}> Write on fridge</button>

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