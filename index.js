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
  <p class="justify">I'm a full stack engineer transitioning from a technical and creative background in product marketing and business operations into the field of web development. My experience has given me a comprehensive understanding of business operations and the ability to find innovative solutions to increase efficiency in various business systems, which lead to my interest in software development. Dedicated and adaptive employee with strong skills in communication and an excitement for new challenges.</p>


  <p class="justify">I chose software engineering for a variety of reasons. Here are a few: 1) I love building things, whether it's a email marketing campaign for a new product or a business operating procedure, 2) I am a creative problem solver and excited by new challenges, and 3) I love learning.</p>

  <p class="justify">I am interested in the way things work on an internal level. One of my favorite courses in college focused on how humans interact with their environment and technology. It highlighted the importance of designing for functionality, and this concept has resonated with me for years. My keen interest in the human experience helps me understand how best to build software designed for human interaction. </p>
  `

}

function technicalSkills() {
  addWrapper()
  content.classList.add("wrapper")
  content.innerHTML = `
  <div class="inner-wrapper">
    <p class="centered">FRONTEND</p>
    <div class="grid-container">
      <div class="grid-item">
        <img src="images/logos/javascript.png" alt="Javascript logo"/>
        <span class="caption">Javascript</span>
        </div>
      <div class="grid-item">
        <img src="images/logos/react.png" alt="React logo"/>
        <span class="caption">React/Redux</span>
      </div>
      <div class="grid-item">
        <img src="images/logos/html5.png" alt="HTML logo"/>
        <span class="caption">HTML</span>
      </div>
      <div class="grid-item">
        <img src="images/logos/Sinatralogo.png" alt="Sinatra logo"/>
        <span class="caption">Sinatra</span>
      </div>
    </div>
  </div>
  <div class="inner-wrapper">
    <p class="centered">BACKEND</p>
    <div class="grid-container">
      <div class="grid-item">
        <img src="images/logos/ruby.png" alt="Ruby logo"/>
        <span class="caption">Ruby</span>
      </div>
      <div class="grid-item">
        <img src="images/logos/rails.png" alt="Rails logo"/>
        <span class="caption">Ruby on Rails</span>
      </div>
      <div class="grid-item">
        <img src="images/logos/SQL.png" alt="SQL logo"/>
        <span class="caption">SQL</span>
      </div>
      <div class="grid-item">
        <img src="images/logos/postgresql.png" alt="Postgresql logo"/>
        <span class="caption">Postgresql</span>
      </div>
    </div>
  </div>
  <div class="inner-wrapper">
    <p class="centered">DESIGN</p>
    <div class="grid-container">
      <div class="grid-item">
        <img src="images/logos/css3.png" alt="CSS logo"/>
        <span class="caption">CSS</span>
      </div>
      <div class="grid-item">
        <img src="images/logos/bootstrap.png" alt="Bootstrap logo"/>
        <span class="caption">Bootstrap</span>
      </div>
      <div class="grid-item">
        <img src="images/logos/materialize.png" alt="Materialize logo"/>
        <span class="caption">Materialize</span>
      </div>
      <div class="grid-item">
        <img src="images/logos/adobe-illustrator.png" alt="Illustrator logo"/>
        <span class="caption">Illustrator</span>
      </div>
    </div>
  </div>
      `
  // <p>MISC</p>
  //   <p> Heroku | Netlify | Wordpress | Shopify</p>

}

function portfolioProjects() {
  addWrapper()
  content.innerHTML = `
  <a href="https://fervent-jackson-99ccea.netlify.app/" target="_blank">TASK ASSIGN</a>
  <ul> 
    <li>React, Redux, Rails Backend</li>
  </ul>
    <a href="https://elegant-einstein-6eff92.netlify.app/" target="_blank">MINDFUL JOURNAL</a>
  <ul> 
    <li>React, Redux, Rails Backend</li>
  </ul>
    <a href="https://rails-book-club.herokuapp.com/" target="_blank">BOOK CLUB</a>
  <ul> 
    <li>React, Redux, Rails Backend</li>
  </ul>
    <a href="https://pet-sitter.herokuapp.com/" target="_blank">CRITTER SITTER</a>
  <ul> 
    <li>React, Redux, Rails Backend</li>
  </ul>
  `
}

function resume() {
  addWrapper()
  content.innerHTML = `
  <span>
    <a href="images/Francesca Dreith Resume.pdf" download target="_blank"><i class="fas fa-file-download"></i></a><a href="images/Francesca Dreith Resume.pdf" download target="_blank">Download Resume</a>
  </span>
  `
}

