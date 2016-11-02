$(document).ready(function() {
	var currentQuestion=0;
	var questions=[{
		question: "What Seinfeld character wasn't present in the pilot episode?",
		answers: ["Jerry", "George", "Kramer", "Elaine"],
		correctIndex: 3,
		image: "http://static.tvfanatic.com/images/gallery/the-seinfeld-chronicles-picture.jpg"
	}, {
		question: "Which of the following did Jerry NOT date?",
		answers: ["Beth", "Susan", "Vanessa", "Jeannie"],
		correctIndex: 1
	}, {
		question: "After 9 years, how many episodes were there?",
		answers: ["200", "165", "180", "95"],
		correctIndex: 2
	}, {
		question: "What is Elaine's trademark line?",
		answers: ["Get out!", "It's not you, it's me", "Oh, the humanity!", "Giddyup!"],
		correctIndex: 0
	}, {
		question: "What is Kramer's first name?",
		answers: ["Karl", "Cosmo", "Kenny", "Constantine"],
		correctIndex: 1
	}, {
		question: "What is the Soup Nazi's favorite expression?",
		answers: ["Die!", "For you, nothing!", "No soup for you!", "Get out!"],
		correctIndex: 2
	}, {
		question: "What does Kramer accuse Calvin Klein of stealing from him?",
		answers: ["His shoes", "An underwear style", "His credit card", "A cologne he invented"],
		correctIndex: 3
	}, {
		question: "Why couldn't Jerry date Jillian?",
		answers: ["She had implants", "Her man hands", "He couldn't remember her name", "She made him feel nauseous"],
		correctIndex: 1
	}, {
		question: "In the final episode, what was the last topic of conversation when they were all in the jail cell together?",
		answers: ["How bad the food is in jail", "How they miss the diner", "How the second button on a shirt can be too high", "What movie they're going to see when they get out"],
		correctIndex: 2
	}]
	
questionsAnswered=0

questionsCorrect=0



$('.startQuiz').on('click', function() {
	showQuestion();
	$('.startQuiz').fadeOut();
	$('.questionWrapper').fadeIn();
	$('.startAgain').hide();
});

function showQuestion() {
	var questionObject=questions[currentQuestion];
	$('.question').text(questionObject.question).prepend('<img src="'+questionObject.image+'" style="height:150px; float: left">');
	//var answerObject=[question.answers[0]];
	//$('#answerList').text(questionObject.answers);
	for (var i=0; i<4; i++) {
		$('#answerList').append('<button class="choice" id="'+i+'">'+questionObject.answers[i]+'</button>')
	}
	$('button.choice').on('click', function() {
		var choice=$(this).attr('id');
		var correctAnswer=questionObject.correctIndex
		if (choice == correctAnswer) {
			questionsAnswered++;
			questionsCorrect++;
			$('.feedback').html('<p class="correct">Correct! The correct answer is: '+questionObject.answers[correctAnswer]+' ('+questionsCorrect+'/'+questionsAnswered+')</p>');
		}
		else {
			questionsAnswered++;
			$('.feedback').html('<p class="wrong">Incorrect! The correct answer is: '+questionObject.answers[correctAnswer]+' ('+questionsCorrect+'/'+questionsAnswered+')</p>');
		}
		$('button.choice').prop('disabled', true);
	})
};


$('.nextQuestion').on('click', function() {
	console.log(currentQuestion);
	if (currentQuestion >= 8) {
		$('.question').hide();
		$('.nextQuestion').hide();
		$('.startAgain').show();
		$('#answerList button:disabled').remove();
		$('.feedback').html('<p class="finished">End of Quiz! You got: '+questionsCorrect+' correct out of '+questionsAnswered+'</p>');
		currentQuestion = 0;
		questionsAnswered = 0;
		questionsCorrect = 0;
	} else {
		currentQuestion++
	showQuestion();
	$('#answerList button:disabled').remove();
	$('.feedback').html('');
	}

});

$('.startAgain').on('click', function() {
	$(this).hide();
	$('.question').show();
	$('.nextQuestion').show();
	$('.feedback').html('');
	showQuestion();
})

});

