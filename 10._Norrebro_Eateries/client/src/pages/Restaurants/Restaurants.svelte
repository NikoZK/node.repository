<script>
import { onMount } from 'svelte'
import { fetchGet } from '../../util/fetchUtil.js';

let restaurants

onMount(async () => {
    const result = await fetchGet('/api/restaurants')
    restaurants = result.data
})

</script>

<h1>Restaurants</h1>

{#each restaurants as restaurant}
        <h3>{restaurant}</h3>
{/each}