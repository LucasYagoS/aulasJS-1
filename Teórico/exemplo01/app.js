const getPosts = async () => {
  const apiResponse = await fetch('http://localhost:3000/posts')
  const posts = await apiResponse.json()
  console.log(posts)
}

const createPost = async (post) => {
  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
}

const addPost = async () => {
  const post = {
    "title": document.getElementById("title").value,
    "autor": document.getElementById("autor").value,
    "img": document.getElementById("image").value,
    "txt": document.getElementById("txt").value
  }
  await createPost(post)

  const title = post.title
  const autor = post.autor
  const img = post.img
  const txt = post.txt

  const div = document.getElementById("news")
  div.innerHTML += `
  <div>
    <img src="${img}" alt="imagem">
    <div>
      <h1>
        ${title}
      </h1>
      <p>
        ${txt}
      </p>
    </div>
  </div>
  `

}
getPosts()

