const qts = [
    {question: 'Capital of Peru?',
     answers: ['Ithasa', 'Lima', 'St.Pedro', 'Grand Peru'],
     right: 'Lima'},
     {question: 'Capital of Russia?',
     answers: ['St.Peterburg', 'Vladivostok', 'Mosgew', 'Moscow'],
     right: 'Moscow'},
     {question: 'Capital of Brazil?',
     answers: ['Sao Paolo', 'Brasilia', 'Rio de Janeiro', 'Vitoria'],
     right: 'Brasilia'},
     {question: 'Capital of Philippines?',
     answers: ['Manila', 'Davao City', 'Zamboanga', 'Antipolo'],
     right: 'Manila'},
     {question: 'Capital of Canada?',
     answers: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'],
     right: 'Ottawa'},
     {question: 'Capital of Mongolia?',
     answers: ['Tongliao', 'Hulunbuir', 'Ulanqab', 'Ulaanbaatar'],
     right: 'Ulaanbaatar'},
     {question: 'Capital of Honduras?',
     answers: ['La Ceiba', 'Honduras', 'Tegucigalpa', 'San Pedro'],
     right: 'Tegucigalpa'},
     {question: 'Capital of Bosnia and Herzegovina?',
     answers: ['Sarajevo', 'Mostar', 'Banja Luka', 'Tuzla'],
     right: 'Sarajevo'},
     {question: 'Capital of New Zealand?',
     answers: ['Hamilton', 'New Sydney', 'Auckland', 'Wellington'],
     right: 'Wellington'},
     {question: 'Capital of Taiwan?',
     answers: ['Taipei', 'Tainan', 'Taichung City', 'Taitung'],
     right: 'Taipei'},
];

let qtsindx=0;
let score=0;
let userChoice ='';
let question = $('.question');
let answers = $('.answrBttn');
let endGameMsg = 'That was the last question! Ready to see your score? Press "Result"!';


startGame();

function startGame(e){
    $('.nextBttn').addClass('hideBttn');
    $('.nextBttn').attr("disabled", true);
    $('.resultBttn').addClass('hideBttn');
    $('.startBttn').on('click',function(){
    $('.startBttn').addClass('hideBttn');
    postAQuestion(qts);
    })
}


function postAQuestion(arr){
    if(qtsindx > 10){
        result();
    }else{
    $('.nextBttn').removeClass('hideBttn');
    $('.nextBttn').attr("disabled", true);
    question.html(arr[qtsindx].question);
    $('.answers').empty();
    addAnswersToTheQuestion(arr);
    }
}

function result(){
    $('.nextBttn').addClass('hideBttn');
    question.html(endGameMsg);
    $('.answers').empty();
    $('.resultBttn').removeClass('hideBttn');
    $('.resultBttn').on('click', function(){
        alert(score);
    })
}

function addAnswersToTheQuestion(arr){
    for(let i=0; i<arr[qtsindx].answers.length; i++){
        let newBttn = `<button class='answrBttn'>${arr[qtsindx].answers[i]}</button>`;
        $('.answers').append(newBttn);
    } 
    pickTheAnswer();
}


function pickTheAnswer(){
$('.answers').on('click', '.answrBttn', function(){
    userChoice = this.innerText;
    $('.nextBttn').attr("disabled", false);
});
checkTheAnswer();
activateNextBttn();
};


function checkTheAnswer(){
      if(userChoice === qts[qtsindx].right){
          //alert('right');
          score+=1;
      }
}

function activateNextBttn(){  
    qtsindx+=1;
    $('.nextBttn').on('click', function(){
        
        postAQuestion(qts);
        console.log("qtsindx: " + qtsindx);
    })
};