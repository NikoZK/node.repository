export async function fetchGet(endpoint) {
try {
    const response = await fetch(`http://localhost:8080${endpoint}`, {
        credentials: 'include'
    })
    return await response.json()
} catch (error) {
    console.log(error)
}}

export async function fetchPost(endpoint) {
    const response = await fetch(`http://localhost:8080${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        return await response.json()
}
