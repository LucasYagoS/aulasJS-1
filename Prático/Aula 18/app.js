const getPosts = async () => {
  const apiResponse = await fetch('http://localhost:3000/posts')
  const posts = await apiResponse.json()
  console.log(posts)
  return posts
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
    "correct": document.querySelector('input[name="flexRadioDefault"]:checked').value
  }

  await createPost(post)
}

getPosts()

const listQuestions = (posts) => {
  const questionsContent = document.getElementById("listQuestions")

  let aux = 1
  posts.forEach(post => {
    questionsContent.innerHTML += `
    <div class="card mb-3">
    <div class="card-body d-flex justify-content-between">
        <div>
            ${aux}. ${post.title}
        </div>
        <div class="d-flex">
            <button type="button" class="button" onclick="editQuestion(${post.id})"><i class="fa-solid fa-pen-to-square fa-lg"></i></button>
            <button type="button" class="button remove-button" onclick="deleteQuestion(${post.id})"><i class="fa-solid fa-trash-can fa-lg"></i></button>
        </div>
    </div>
    `
    aux++
  });
}

const loadQuestions = async () => {
  const questions = await getPosts()
  listQuestions(questions)
}
const getQuestion = async (id) => {
  const apiResponse = await fetch(`http://localhost:3000/posts/${id}`)
  const question = apiResponse.json()
  return question
}
const modal = document.getElementById("modal")

const openModal = () => {
  modal.style.display = "block"
}
const closeModal = () => {
  modal.style.display = "none"
}
let currentId
const editQuestion = async (id) => {
  openModal()
  const currentQuestion = await getQuestion(id)
  document.getElementById("questionTitle").value = currentQuestion.title
  document.getElementById("alternative1").value = currentQuestion.alt1
  document.getElementById("alternative2").value = currentQuestion.alt2
  document.getElementById("alternative3").value = currentQuestion.alt3
  document.getElementById("alternative4").value = currentQuestion.alt4
  document.querySelector(`input[id = 'flexRadio${currentQuestion.correct}']`).checked = true

  return currentId = currentQuestion.id
}



const saveQuestion = async (currentId) => {
  const currentQuestion = await getQuestion(currentId)
  const updatedQuestion = {
    "title": document.getElementById("questionTitle").value,
    "alt1": document.getElementById("alternative1").value,
    "alt2": document.getElementById("alternative2").value,
    "alt3": document.getElementById("alternative3").value,
    "alt4": document.getElementById("alternative4").value,
    "correct": document.querySelector('input[name="flexRadioDefault"]:checked').value
  }

  await updateQuestion(currentId, updatedQuestion)
  closeModal()
}

const updateQuestion = async (id, question) => {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(question)
  })
}

const deleteQuestion = async (id) => {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE'
  })
  getQuestions()
}

let quizCurrentQuestion = 1
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const prevQuestion = async () => {

  if (quizCurrentQuestion - 1 === 1) {

    prevBtn.style.display = "none"
  } else {
    quizCurrentQuestion--
    await quizQuestions(quizCurrentQuestion)
  }
}

const countApiSize = async () => {
  const apiQuestions = await getPosts()
  let apiCounter = 0

  apiQuestions.forEach((question) => {
    apiCounter++
  })
  return apiCounter
}
const nextQuestion = async (apiCounter) => {

  if (quizCurrentQuestion + 1 === apiCounter) {

    nextBtn.style.display = "none"
    
  } else {
    quizCurrentQuestion++
    await quizQuestions(quizCurrentQuestion)
    prevBtn.style.display = "block"
  }
}

const quizQuestions = async (quizCurrentQuestion) => {
  const currentQuestion = await getQuestion(quizCurrentQuestion)
  document.getElementById("questionTitle").innerText = currentQuestion.title
  document.getElementById("label1").innerText = currentQuestion.alt1
  document.getElementById("label2").innerText = currentQuestion.alt2
  document.getElementById("label3").innerText = currentQuestion.alt3
  document.getElementById("label4").innerText = currentQuestion.alt4
  const res = document.querySelector('input[name="flexRadioDefault"]:checked').value


}