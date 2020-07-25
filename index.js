document.addEventListener("DOMContentLoaded", appendButtonListeners);

const content = document.getElementById("content");

function appendButtonListeners() {
  const nav = document.getElementById("nav");

  const promptButtons = nav.querySelectorAll("button");
  for (let i = 0; i < promptButtons.length; i++) {
    promptButtons[i].addEventListener("click", eval(promptButtons[i].id));
  }
}
function addWrapper() {
  content.classList.add("wrapper");
}

function aboutMe() {
  addWrapper();
  content.innerHTML = `

  <p>Hello, I'm <b>Francesca.</b></p>
  <p class="justify">I'm a full stack engineer with a technical and creative background in product marketing and business operations. My experience has given me a comprehensive understanding of business operations and the ability to find innovative solutions to increase efficiency in various business systems, leading to my interest in software development.</p>

  <p class="justify">I chose software engineering for a variety of reasons. Here are a few:  1) I love building things, whether it's a email marketing campaign for a new product or a business operating procedure.  2) I am a creative problem solver and excited by new challenges.  3) I love learning.</p>

  <p class="justify">Growing up with an arts focused education gave me a good understanding of visual design fundamentals. A strong interest in design coupled with a craving to understand how things work on an internal level has contributed to my interest in software development. One of my favorite courses in college focused on how humans interact with their environment and technology. It highlighted the importance of designing for functionality, and this concept has resonated with me for years. My keen interest in the human experience helps me build software designed for human interaction. </p>

  <p class="justify">I'm a dedicated and adaptive employee with strong skills in communication and an excitement for new challenges. I am currently looking for work that contributes to bettering the human experience, whether in the workplace or in personal development.</p>

  <p class="justify">Take a look around my portfolio and reach out if there is anything that interests you, or if you would like to know more.</p>
  `;
}

function technicalSkills() {
  addWrapper();
  content.classList.add("wrapper");
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
      `;
  // <p>MISC</p>
  //   <p> Heroku | Netlify | Wordpress | Shopify</p>
}

function portfolioProjects() {
  addWrapper();
  content.innerHTML = `
  <div class="projectsContainer">
    <div class="taskAssignContainer project">
      <div class="projectDescription">
        <h2>Task Assign</h2>
        <p>Task management system for teams. Ability to assign tasks to other team members, comment on tasks, and track their progress.</p>
        <span>
          <a href="https://github.com/fdreith/react-project-frontend" target="_blank"><button>Github</button></a>
         <a href="https://fervent-jackson-99ccea.netlify.app/login" target="_blank"><button>Demo</button></a>
        </span>
      </div>
    </div>
    <div class="mindfulJournalContainer project">
      <div class="projectDescription">
        <h2>Mindful Journal</h2>
        <p>A digital journal to help maintain a writing goal with prompts based on a particular mood, and a timer to help the user stay on task. The user can look back at past entries by mood.</p>
        <span>
          <a href="https://github.com/fdreith/javascript-api-project" target="_blank"><button>Github</button></a>
          <a href="https://elegant-einstein-6eff92.netlify.app/" target="_blank"><button>Demo</button></a>
        </span>
      </div>
    </div>
    <div class="bookClubContainer project">
      <div class="projectDescription">
        <h2>Book Club</h2>
        <p>A digital book club for users to track books they have read or would like to read, and have discussions surrounding a particular book.</p>
        <span>
          <a href="https://github.com/fdreith/rails-project" target="_blank"><button>Github</button></a>
          <a href="https://rails-book-club.herokuapp.com/" target="_blank"><button>Demo</button></a>
        </span>
      </div>
    </div>
    <div class="citterSitterContainer project">
      <div class="projectDescription">
        <h2>Citter Sitter</h2>
        <p>Communication and tracking tool for households with multiple people caring for a pet, including family, roommates, pet sitters or dog walkers.</p>
        <span>
          <a href="https://github.com/fdreith/sinatra_project" target="_blank"><button>Github</button></a>
          <a href="https://pet-sitter.herokuapp.com/login" target="_blank"><button>Demo</button></a>
        </span>
      </div>
    </div>
  </div>
  `;
}

function resume() {
  addWrapper();
  content.innerHTML = `
  <span>
    <a href="images/Francesca Dreith Resume.pdf" download target="_blank"><i class="fas fa-file-download"></i></a><a href="images/Francesca Dreith Resume.pdf" download target="_blank">Download Resume</a>
  </span>
  `;
}
