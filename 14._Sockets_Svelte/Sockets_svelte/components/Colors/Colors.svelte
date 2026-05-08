<script>
    import io from "socket.io-client";
    import { onMount } from "svelte";
    import { BASE_URL } from "../../stores/generalStore.js";
    import { colorsList } from "../../stores/colorsList.js"

    let socket
    
    let colorInput = "#0000ff"

    onMount(() => {
        socket = io($BASE_URL, {
            withCredentials: true
        })

        socket.on("server-sends-color", (data) => {
            //Dont do this, this is DOM manipulation, do it in tha svelte way.
            document.body.style.backgroundColor = data.data

            colorsList.update((colorsList) => {
                colorsList.push({
                    nickname: data.nickname,
                    color: data.data
                })
                return colorsList
            })
        })
    });

    function submitColor() {
        socket.emit("client-sends-color", { data: colorInput})
    }
</script>

<!-- <svelte:body style:background-color={'#00ff00'} />-->
<input type="color" bind:value={colorInput}>
<button onclick={submitColor}>Submit color</button>

{#each $colorsList as colorsListItem}
<div>{colorsListItem.nickname}: {colorsListItem.color}</div>
{/each}
