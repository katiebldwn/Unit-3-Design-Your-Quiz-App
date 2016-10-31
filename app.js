$(document).ready(function() {
	var currentQuestion=0;
	var questions=[{
		question: "What Friends character said this: 'It's a moo point. It's like a cow's opinion; it doesn't matter. It's moo.'",
		answers: ["Ross", "Rachel", "Chandler", "Joey"],
		correctIndex: 3
	}, {
		question: "What is the alias Phoebe occasionally uses throughout the show?",
		answers: ["Phoerber Burffer", "Regina Phalange", "Agent Phoebs", "Jane Doe"],
		correctIndex: 1
	}, {
		question: "What 80's Victoria's Secret model does Chandler meet while trapped in the ATM vestibule during the blackout?",
		answers: ["Cindy Crawford", "Brooke Shields", "Jill Goodacre", "Cheryl Tiegs"],
		correctIndex: 2
	}, {
		question: "When Ross attempts to impress a date, what part of his wardrobe makes him overheat and end up covered in baby powder and lotion?",
		answers: ["leather pants", "wool sweater", "thermal gloves", "fur coat"],
		correctIndex: 0
	}, {
		question: "When Ross, Rachel and Chandler are trying to move a couch up a flight of stairs, what word does Ross continuously shout?",
		answers: ["LIFT!", "PIVOT!", "GO!", "STOP!"],
		correctIndex: 1
	}, {
		question: "What neighbor across the street do the Friends occasionally watch?",
		answers: ["Weird Al", "Messy Girl", "Ugly Naked Guy", "Creeper McGee"],
		correctIndex: 2
	}, {
		question: "What marriage-prone friend did Chandler say this to: 'If you're not careful, you may not get married at all this year!'",
		answers: ["Ross", "Monica", "Joey", "Rachel"],
		correctIndex: 0
	}, {
		question: "What is Chandler and Joey's favorite TV show?",
		answers: ["Fresh Prince of Bel-Air", "The Simpsons", "Seinfeld", "Baywatch"],
		correctIndex: 3
	}, {
		question: "What song did Ross sing to make his daughter Emma laugh?",
		answers: ["Baby One More Time", "Baby Got Back", "YMCA", "Groove is in the Heart"],
		correctIndex: 1
	}, {
		question: "What friend said this: 'I know, this must be so hard. 'Oh no, two women love me! They're both gorgeous and sexy. My wallet's too tight for my fifties and my diamond shoes are too tight!''",
		answers: ["Ross", "Joey", "Chandler", "Gunther"],
		correctIndex: 2
	}]
	
questionsAnswered=0

questionsCorrect=0



$('.startQuiz').on('click', function() {
	showQuestion();
	$('.startQuiz').fadeOut();
	$('.questionWrapper').fadeIn();
});

function showQuestion() {
	var questionObject=questions[currentQuestion];
	$('.question').text(questionObject.question);
	//var answerObject=[question.answers[0]];
	//$('#answerList').text(questionObject.answers);
	for (var i=0; i<4; i++) {
		$('#answerList').append('<button class="choice" id="'+i+'">'+questionObject.answers[i]+'</button>')
		console.log(questionObject.answers[i]);
	}
	$('button.choice').on('click', function() {
		var choice=$(this).attr('id');
		var correctAnswer=questionObject.correctIndex
		if (choice == correctAnswer) {
			questionsAnswered++;
			questionsCorrect++;
			$('.feedback').html('<p class="correct">Correct!'+questionObject.answers[correctAnswer]+' ('+questionsCorrect+'/'+questionsAnswered+')</p>');
		}
		else {
			questionsAnswered++;
			$('.feedback').html('<p class="wrong">Incorrect! The correct answer is: '+questionObject.answers[correctAnswer]+' ('+questionsCorrect+'/'+questionsAnswered+')</p>');
		}
		$('button.choice').prop('disabled', true);
	})
};


$('.nextQuestion').on('click', function() {
	currentQuestion++
	showQuestion();
	$('#answerList button:disabled').remove();
	$('.feedback').html('');
});









});

