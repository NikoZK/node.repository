<script>
    import Child from "../components/Child/Child.svelte";

    let { name, children } = $props()

    import { fridgeMessages } from "../stores/fridgeStore.js";

    function handleShowLove(childName) {
        console.log(`${childName} loves u`)
    }

    let cookieJar = $state(['🍪', '🍪', '🍪', '🍪'])

    let monsterFridge = $state(['🐾', '🐾', '🐾', '🐾'])

    function handleEatCookie() {
        cookieJar.pop()
    }


//Assignment
// Create a cookie jar in the parent,
// a child should be able to take a cookie
// which should remove the cookie from the jar
// use the correct on... handle... convention🍪

</script>

<button onclick={fridgeMessages.wipe}>WIPE FRIDGE</button>

<h1>My name is {name}.</h1>
<span>{cookieJar}</span>

{#each monsterFridge as monster}
<p>{monster}</p>
{/each}

{#each children as child (child.name)}
<Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie} monsterFridge={monsterFridge}/>
{/each}