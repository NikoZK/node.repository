<script>
import { BASE_URL } from "../../stores/generalStore.js"
import { nickname } from "../../stores/nicknameStore.js"

    let nicknameInput = $state("")

    console.log($BASE_URL)

    async function submitNickname() {
        const response = await fetch($BASE_URL + "/nickname", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ nickname: nicknameInput }),
        })
        const result = await response.json()

        nickname.set(result.data)

        localStorage.setItem('nickname', result.data)
        console.log(result)
    }
</script>

<input bind:value={nicknameInput} placeholder="Nickname...">
<button onclick={submitNickname}>Submit</button>