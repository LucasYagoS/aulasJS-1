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
    "title": document.getElementById("questionTitle").value,
    "alt1": document.getElementById("alternative1").value,
    "alt2": document.getElementById("alternative2").value,
    "alt3": document.getElementById("alternative3").value,
    "alt4": document.getElementById("alternative4").value,
    "correct": form.elements["flexRadionDefault"].value
    
  }
  
  await createPost(post)
}

getPosts()
