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

 


