const navLinks = document.querySelectorAll('nav ul li a');
const currentUrl = window.location.href;

navLinks.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});


function checkAnswer(answerId, correctAnswer, messageId) {
  var answerInput = document.getElementById(answerId);
  var messageOutput = document.getElementById(messageId);
  var correctOutput = document.getElementById('correct-' + messageId);
  var userAnswer = answerInput.value.trim().toLowerCase();
  if (userAnswer === correctAnswer.toLowerCase()) {
    messageOutput.innerHTML = "";
    correctOutput.innerHTML = "Correct! Well done.";
  } else {
    messageOutput.innerHTML = "Incorrect. The correct answer is " + correctAnswer + ".";
    correctOutput.innerHTML = "";
  }
  answerInput.value = "";
}




