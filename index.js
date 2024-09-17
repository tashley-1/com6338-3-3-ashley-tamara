// Your code here
var questionsArr = [
    { question: "Is it a good day to be a Gator?", answer: true },
    { question: "Is water a solid?", answer: false },
    { question: "The University of Florida provides optional healthcare to their students.", answer: false },
    { question: "Caffeine is a stimulant.", answer: true },
    { question: "There are 100 states in the USA.", answer: false }
  ];
  
 // Function to run the quiz
function runQuiz() {
    let score = 0;  // Initialize the score
    
    // Iterate over the questions array
    for (let i = 0; i < questionsArr.length; i++) {
      // Ask the user each question using prompt, expecting "true" or "false"
      let userAnswer = prompt(questionsArr[i].question + " (true/false)").toLowerCase();
  
      // Check if the user provided valid input ("true" or "false")
      if (userAnswer === "true" || userAnswer === "false") {
        // Convert the user input from string to boolean for comparison
        let userBooleanAnswer = (userAnswer === "true");
  
        // Compare the user's answer to the correct answer in the questions array
        if (userBooleanAnswer === questionsArr[i].answer) {
          score++;  // Increment score if the answer is correct
        }
      } else {
        // If the user input is invalid, alert and retry the same question
        alert("Invalid answer. Please enter 'true' or 'false'.");
        i--;  // This ensures the current question is repeated
      }
    }
  
    // Calculate the percentage of correct answers
    let percentage = Math.round((score / questionsArr.length) * 100);
    
    // Display the result
    alert("You got " + percentage + "% correct!");
  }