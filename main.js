const qts = [
    {question: 'Capital of Peru? 1/10',
     answers: ['Ithasa', 'Lima', 'St.Pedro', 'Grand Peru'],
     right: 'Lima'},
     {question: 'Capital of Russia? 2/10',
     answers: ['St.Peterburg', 'Vladivostok', 'Mosgew', 'Moscow'],
     right: 'Moscow'},
     {question: 'Capital of Brazil? 3/10',
     answers: ['Sao Paolo', 'Brasilia', 'Rio de Janeiro', 'Vitoria'],
     right: 'Brasilia'},
     {question: 'Capital of Philippines? 4/10',
     answers: ['Manila', 'Davao City', 'Zamboanga', 'Antipolo'],
     right: 'Manila'},
     {question: 'Capital of Canada? 5/10',
     answers: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'],
     right: 'Ottawa'},
     {question: 'Capital of Mongolia? 6/10',
     answers: ['Tongliao', 'Hulunbuir', 'Ulanqab', 'Ulaanbaatar'],
     right: 'Ulaanbaatar'},
     {question: 'Capital of Honduras? 7/10',
     answers: ['La Ceiba', 'Honduras', 'Tegucigalpa', 'San Pedro'],
     right: 'Tegucigalpa'},
     {question: 'Capital of Bosnia and Herzegovina? 8/10',
     answers: ['Sarajevo', 'Mostar', 'Banja Luka', 'Tuzla'],
     right: 'Sarajevo'},
     {question: 'Capital of New Zealand? 9/10',
     answers: ['Hamilton', 'New Sydney', 'Auckland', 'Wellington'],
     right: 'Wellington'},
     {question: 'Capital of Taiwan? 10/10',
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

function startGame(){
    $('body').addClass('neutral');
    $('.nextBttn').addClass('hideBttn');
    $('.submitBttn').attr("disabled", true); 
    $('.submitBttn').addClass('hideBttn');
    $('.nextBttn').attr("disabled", true);
    $('.resultBttn').addClass('hideBttn');
    $('.startBttn').on('click',function(){
    $('.startBttn').addClass('hideBttn');
    postAQuestion(qts);
    })
}

function postAQuestion(arr){
    if(qtsindx >= 10){
        result();
    }else{
    $('.nextBttn').removeClass('hideBttn');
    $('.submitBttn').removeClass('hideBttn');
    $('.submitBttn').attr("disabled", true); 
    $('.nextBttn').attr("disabled", true);
    question.html(arr[qtsindx].question);
    $('.answers').empty();
    addAnswersToTheQuestion(arr);
  }
}

function result(){
    $('.nextBttn').addClass('hideBttn');
    $('.submitBttn').addClass('hideBttn');
    question.html(endGameMsg);
    $('.answers').empty();
    $('.resultBttn').removeClass('hideBttn');
    $('.resultBttn').on('click', function(){
        question.html(`Your total score is ${score}!`);
        $('.resultBttn').addClass('hideBttn');
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
    console.log("qtsindx: " + qtsindx);
    console.log("score: " + score);
$('.answers').on('click', '.answrBttn', function(){
    userChoice = this.innerText;
    $('.submitBttn').attr("disabled", false); 
    submitAnswer();
});
};

function submitAnswer(){
    $('.submitBttn').on('click', function (){
       $('.answers button').attr("disabled", true);  
       $('.nextBttn').attr("disabled", false); 
       $('.submitBttn').attr("disabled", true); 
       if(userChoice === qts[qtsindx].right){
        $('body').removeClass('neutral');
        $('body').removeClass('wronganswer');
        $('body').addClass('ranswer');
      }else{
        $('body').removeClass('neutral');
        $('body').removeClass('ranswer');
        $('body').addClass('wronganswer');
        question.html(`The right answer is ${qts[qtsindx].right}!`);
    }
    })
}

function listenToNext() {
  // Do it like this because it only adds one listener
  $(document).on('click', '.nextBttn', function(){
    $('body').removeClass('ranswer');
    $('body').removeClass('wronganswer'); 
    $('body').addClass('neutral');    
    scoreCount();      
    postAQuestion(qts);
  })
}

function scoreCount(){
    if(userChoice === qts[qtsindx].right){
        score++;
        qtsindx++;
      }else{
        qtsindx++;
    }
};

listenToNext();