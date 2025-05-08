
async function loadData() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const respuesta = await posts.json()
    console.log(respuesta)
}

loadData()




