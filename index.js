var startBTN = document.querySelector('.start-button')
var homeDiv = document.querySelector('.home-div')
var quizContainer = document.querySelector('.quiz-container')
var popUpOkBTN = document.querySelectorAll('.ok')
var popUpCorrect = document.querySelector('.pop-correct')
var popUpIncorrect = document.querySelector('.pop-incorrect')
var Options = document.querySelectorAll('.option')
var questionHeading = document.querySelector('.question-one-heading')
var Question = document.querySelector('.question-one')
var Answer = document.querySelector('.answer')
var optionA = document.querySelector('.a')
var optionB = document.querySelector('.b')
var optionC = document.querySelector('.c')
var optionD = document.querySelector('.d')
var nextButton = document.querySelector('.next-button')
let next = false
let lastQuestion = 'inactive'
var resultDiv = document.querySelector('.result-div')
var Score = document.querySelector('.score')
var scoreBox = document.querySelector('.score-box')
var homeButton = document.querySelector('.home-button')



const quizQuestions = [

question1 = `Which Swedish footballer once had a clause inserted into his
Premier League contract that prohibited him from travelling into space?`,
question2 = `Which player scored the fastest hat-trick in the Premier League?`,
question3 = `What year did KAKA win his first Ballon d'or?`,
question4 = `Which country has won the most World Cups?`,
question5 = `How many Ballon d'ors does KAKA have?`,
]

const quizOptions = [
    option1 = {
        a:'C.Ronaldo',
        b:'Kaka',
        c:'Ronaldinho',
        d:'Stefan Schwarz',
        answer:'Stefan Schwarz'

    },
    option2 = {
        a:'Sadio Mane',
        b:'Benzema',
        c:'Lewandowski',
        d:'C.Ronaldo',
        answer:'Sadio Mane'

    },
    option3 = {
        a:'2001',
        b:'2003',
        c:'2007',
        d:'2010',
        answer:'2007'

    },
    option4 = {
        a:'Argentina',
        b:'Germany',
        c:'Spain',
        d:'Brazil',
        answer:'Brazil'

    },
    option5 = {
        a:'0',
        b:'1',
        c:'2',
        d:'3',
        answer:'1'

    },

]



let totalScore = 0
var n = 1
var questionNumber = 0
const loadQuestions = () => {
  questionHeading.innerHTML = `Question ${n}/5`
  Question.innerHTML = `${quizQuestions[questionNumber]}`
  optionA.innerHTML = `${quizOptions[questionNumber].a}`
  optionB.innerHTML = `${quizOptions[questionNumber].b}`
  optionC.innerHTML = `${quizOptions[questionNumber].c}`
  optionD.innerHTML = `${quizOptions[questionNumber].d}`
  Answer.innerHTML = `The answer is : ${quizOptions[questionNumber].answer}`
   

}


const displayQuizPage = () => {
    startBTN.addEventListener('click', () => {
       homeDiv.style.visibility = 'hidden'
    quizContainer.style.visibility = 'visible' 
    })
   

}

const disableButtons = () => {
    Options.forEach(option => {
        
    option.disabled = true
        
    });
   

}

const loadNextQuestion = () => {
nextButton.addEventListener('click',()=>{
Answer.style.visibility = 'hidden'
        
      if( next === true) {
        Options.forEach(option => {
        
            option.disabled = false
                
            });
        n++
questionNumber++

questionHeading.innerHTML = `Question ${n}/5`
Question.innerHTML = `${quizQuestions[questionNumber]}`
optionA.innerHTML = `${quizOptions[questionNumber].a}`
optionB.innerHTML = `${quizOptions[questionNumber].b}`
optionC.innerHTML = `${quizOptions[questionNumber].c}`
optionD.innerHTML = `${quizOptions[questionNumber].d}`
Answer.innerHTML = `The answer is : ${quizOptions[questionNumber].answer}`
      }
            
    




})



}






const checkIfLastQuestionIsActiveAndLoadResultPage = () => {
    nextButton.addEventListener('click',()=>{
    if(questionNumber === 5){
        quizContainer.style.visibility = 'hidden' 
       resultDiv.style.visibility = 'visible'
       scoreBox.innerHTML = `your total score is : ${totalScore}/5`
       Score.innerHTML= `${totalScore}`

    }     
   })
   
    
    
    }

const removePopUpForCorrectOrIncorrectAnswer = () => {
    popUpOkBTN.forEach(BTN => {
        BTN.addEventListener('click',()=>{
    
            popUpCorrect.style.visibility = 'hidden'
            popUpIncorrect.style.visibility = 'hidden'
        })
    });
    
    
    }


const displayPopUp = () => {
Options.forEach(option => {
    option.addEventListener('click',()=>{

        next = true
if(option.textContent === quizOptions[questionNumber].answer){
    popUpCorrect.style.visibility = 'visible'
    totalScore+=1
    Options.forEach(option => {
        
        option.disabled = true
            
        });
}
else if(option.textContent !== quizOptions[questionNumber].answer){
    Answer.style.visibility = 'visible'
    popUpIncorrect.style.visibility = 'visible'
    Options.forEach(option => {
        
        option.disabled = true
            Answer.style.visibility = 'visible'
        });
}
 
    })
});
   

}

startBTN.addEventListener('click', () => {
    displayQuizPage()
})


const goBackToHome = () => {
   homeButton.addEventListener('click',()=>{
resultDiv.style.visibility = 'hidden'
homeDiv.style.visibility = 'visible'
 totalScore = 0
 n = 1
questionNumber = 0


questionHeading.innerHTML = `Question ${n}/5`
Question.innerHTML = `${quizQuestions[questionNumber]}`
optionA.innerHTML = `${quizOptions[questionNumber].a}`
optionB.innerHTML = `${quizOptions[questionNumber].b}`
optionC.innerHTML = `${quizOptions[questionNumber].c}`
optionD.innerHTML = `${quizOptions[questionNumber].d}`
Answer.innerHTML = `The answer is : ${quizOptions[questionNumber].answer}`
   })
   

}




window.addEventListener('load',()=>{
    displayQuizPage()
    removePopUpForCorrectOrIncorrectAnswer()
    displayPopUp()
    loadQuestions()
    loadNextQuestion()
    checkIfLastQuestionIsActiveAndLoadResultPage()
    goBackToHome()
})