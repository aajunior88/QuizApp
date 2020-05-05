const StartButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

StartButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    StartButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
     questionElement.innerText = question.question
     question.answers.forEach(answer => {
         const button = document.createElement('button')
         button.innerText = answer.text
         button.classList.add('btn')
         if (answer.correct){
             button.dataset.correct = answer.correct
         }
         button.addEventListener('click', selectAnswer)
         answerButtonsElement.appendChild(button)
     })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        StartButton.innerText.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question : 'Are a start.ng Intern ?',
        Answers: [
            { text: 'Yes', correct: true},
            { text: 'No', correct: false},
            { text: 'May Be', correct: false},
            { text: 'I dont know', correct: false}
        ]
    },
    {
        question : 'What Does HTML Stands For ?',
        Answers: [
            { text: 'Hypertext MarkUp Language', correct: true},
            { text: 'No Idea', correct: false},
            { text: 'High Traffic My Lane', correct: false},
            { text: 'High Traffic Markup Language', correct: false}
        ]
    },
    {
        question : 'What does CSS Stands for ?',
        Answers: [
            { text: 'Cascading System Structure', correct: false},
            { text: 'No Idea', correct: false},
            { text: 'Cascading Style Sheet', correct: true},
            { text: 'None of The Above', correct: false}
        ]
    },
    {
        question : 'What does JS Stands for ?',
        Answers: [
            { text: 'Joy Structure', correct: false},
            { text: 'No Idea', correct: false},
            { text: 'Javascript', correct: true},
            { text: 'all of The Above', correct: false}
        ]
    },
    {
        question : 'Who Is Your favourite Mentor ?',
        Answers: [
            { text: 'Jeff', correct: true},
            { text: 'Phileo', correct: true},
            { text: 'Eniola', correct: true},
            { text: 'Xyluz', correct: true}
        ]
    },
]