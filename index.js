document.addEventListener("DOMContentLoaded", appendButtonListeners)

const content = document.getElementById("content")

function appendButtonListeners() {
  const nav = document.getElementById("nav")

  const promptButtons = nav.querySelectorAll("button")
  for (let i = 0; i < promptButtons.length; i++) {
    promptButtons[i].addEventListener("click", eval(promptButtons[i].id))
  }

}

function addWrapper() {
  content.classList.add("wrapper")
}

function aboutMe() {
  addWrapper()
  content.innerHTML = `
  <p> Hello! I'm Francesca.</p>
  `

}

function technicalSkills() {
  addWrapper()
  content.classList.add("wrapper")
  content.innerHTML = `
  <p> Here are my technical skills.</p>
  `

}

function portfolioProjects() {
  addWrapper()
  content.innerHTML = `
  <p> Take a look at my projects.</p>
  `
}

function resume() {
  addWrapper()
  content.innerHTML = `
  <p> Download my resume. </p>
  `
}

