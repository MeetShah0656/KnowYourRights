 function quizSectionOneDialogue() {
   const section = document.getElementById('section1');
    
   section.classList.remove('fade-in');
   section.classList.add('fade-out');

}

function displaySectionOneQuestions() {
  const conversations = document.getElementById('convesrations');
  const dialogue = document.getElementById('s1-d1');

  conversations.classList.add('fade-out');
  dialogue.classList.add('fade-out');
}


const correctAnswers = {
  option1: '3',
  option2: '1',
  option3: '2',
  option4: '2',
  option5: '2'
};

function saveAnswer(question, nextPage) {
  let userAnswer = document.querySelector(`input[name="${question}"]:checked`);
  
  if (userAnswer) {
      localStorage.setItem(question, userAnswer.value);
      

      window.location.href = nextPage;
  } else {
      alert('Please select an answer!');
  }
}

function calculateScore() {
  let score = 0;


  for (let question in correctAnswers) {
      let userAnswer = localStorage.getItem(question);
      
 
      if (userAnswer && userAnswer === correctAnswers[question]) {
          score++;
      }
  }

  let totalQuestions = Object.keys(correctAnswers).length;
  document.getElementById('scoreContainer').textContent = `You scored ${score} out of ${totalQuestions}`;
}


