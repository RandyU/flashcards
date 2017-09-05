"use strict"; 

var question = document.getElementById('question');
var correct = document.getElementById('correct');
var choices = [document.getElementById('optionOne'), document.getElementById('optionTwo'), document.getElementById('optionThree'), document.getElementById('optionFour')];
var lastChoices = [document.getElementById('optionOneLast'), document.getElementById('optionTwoLast'), document.getElementById('optionThreeLast'), document.getElementById('optionFourLast'), document.getElementById('optionFive'), document.getElementById('optionSix'), document.getElementById('optionSeven'), document.getElementById('optionEight'), document.getElementById('optionNine'), document.getElementById('optionTen'), document.getElementById('optionEleven'), document.getElementById('optionTwelve'), document.getElementById('optionThirteen'), document.getElementById('optionFourteen'), document.getElementById('optionFifteen'), document.getElementById('optionSixteen'), document.getElementById('optionSeventeen'), document.getElementById('optionEighteen'), document.getElementById('optionNineteen'), document.getElementById('optionTwenty'), document.getElementById('optionTwentyOne'), document.getElementById('optionTwentyTwo')];

var score = 0;
var currentBasic = 0;
var currentIntermediate = 0;
var currentAdvanced = 0;
var option = 0;

var message = document.getElementById('message');
message.style.display = 'none';
message.style.fontSize = '100px';
message.style.color = '#F00';

var options = document.getElementById('options');
options.style.display = 'none';

var congrats = document.getElementById('congrats');
congrats.style.display = 'none';

var reset = document.getElementById('reset');
reset.addEventListener('click', resetFunction);

var lastQuestionOptions = document.getElementById('lastQuestionOptions');
lastQuestionOptions.style.display = 'none';

var answer = document.getElementById('answer');
answer.style.fontSize = '35px';
answer.style.color = '#0C8';

var scoreCalc = document.getElementById('scoreCalc');
scoreCalc.style.fontSize = '35px';
scoreCalc.style.color = '#0C8';

var sectionTitles = document.getElementById('sectionTitles');
sectionTitles.style.fontSize = '50px';

var QuestionSection = document.getElementById('QuestionSection');
QuestionSection.style.color = '#F00';
QuestionSection.addEventListener('click', basic_question);

function question() {
	options.style.display = 'block';
	question.style.display = 'block';
	sectionTitles.style.display = 'none';
  	question.innerHTML = Questions[currentBasic].question;
  	choices[0].innerHTML = Questions[currentBasic].options[0];
  	choices[1].innerHTML = Questions[currentBasic].options[1];
  	choices[2].innerHTML = Questions[currentBasic].options[2];
  	choices[3].innerHTML = Questions[currentBasic].options[3];
	while (option < 4) {
		choices[option].removeEventListener('click', basic_correct);
		choices[option].removeEventListener('click', home);
		choices[option].addEventListener('click',incorrect);
		option = option + 1;
	}
	if (currentBasic === 0) {
		choices[1].removeEventListener('click', incorrect);
		choices[1].addEventListener('click', basic_correct);
	} else if (currentBasic === 1) {
		choices[2].removeEventListener('click', incorrect);
		choices[2].addEventListener('click', basic_correct);
	} else if (currentBasic === 2) {
		choices[3].removeEventListener('click', incorrect);
		choices[3].addEventListener('click', basic_correct);
	} else if (currentBasic === 3) {
		choices[0].removeEventListener('click', incorrect);
		choices[0].addEventListener('click', basic_correct);
	} else if (currentBasic === 4) {
		choices[2].removeEventListener('click', incorrect);
		choices[2].addEventListener('click', home);
	}
    currentBasic = currentBasic + 1;
    disable_basic();
    option = 0;
}

f

function home() {
	options.style.display = 'none';
	lastQuestionOptions.style.display = 'none';
	question.style.display = 'none';
	answer.innerHTML = '';
	sectionTitles.style.display = 'block';
	score = score + 1;
	correct.innerHTML = score;
	option = 0;
	congratulations();
}

function incorrect () {
	answer.innerHTML = 'INCORRECT';
	score = score - 1;
	correct.innerHTML = score;
}

function correct() {
	answer.innerHTML = 'CORRECT';
	question();
	score = score + 1;
	correct.innerHTML = score;
}

function disable() {
	QuestionSection.removeEventListener('click', question);
	QuestionSection.style.opacity = '.3';
}

function congratulations() {
	if (score === 15) {
		congrats.style.display = 'block';
		message.style.display = 'block';
		scoreCalc.style.display = 'none';
		QuestionSection.style.display = 'none';
		document.getElementById('title').style.display = 'none';
	}
}

function resetFunction() {
	document.location = 'http://randyu.github.io/flashcards/';
}