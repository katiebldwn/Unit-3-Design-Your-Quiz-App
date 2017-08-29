$(document).ready(function() {
	var currentQuestion=0;
	var questions=[{
		question: "What Seinfeld character wasn't present in the pilot episode?",
		answers: ["Jerry", "George", "Kramer", "Elaine"],
		correctIndex: 3,
		image: "http://mediad.publicbroadcasting.net/p/demowgbh/files/201407/SeinfeldA.jpg"
	}, {
		question: "Which of the following did Jerry NOT date?",
		answers: ["Beth", "Susan", "Vanessa", "Jeannie"],
		correctIndex: 1,
		image: "http://i0.wp.com/fusiondotnet.files.wordpress.com/2015/06/brigette.png%3Fw%3D670%26quality%3D80%26strip%3Dall"
	}, {
		question: "After 9 years, how many episodes were there?",
		answers: ["200", "165", "180", "95"],
		correctIndex: 2,
		image: "https://cdn-images-1.medium.com/max/2000/1*2_OrQzxPPhxkZoyIIeApaA.jpeg"
	}, {
		question: "What is Elaine's trademark line?",
		answers: ["Get out!", "It's not you, it's me", "Oh, the humanity!", "Giddyup!"],
		correctIndex: 0,
		image: "http://www.6sqft.com/wp-content/uploads/2015/03/Seinfeld-Elaine-212.jpg"
	}, {
		question: "What is Kramer's first name?",
		answers: ["Karl", "Cosmo", "Kenny", "Constantine"],
		correctIndex: 1,
		image: "https://1835441770.rsc.cdn77.org/static.awlnetwork.com/wp-content/uploads/sites/2/2011/06/michael-richards-kramer-1-e1308868274133.jpg"
	}, {
		question: "What is the Soup Nazi's favorite expression?",
		answers: ["Die!", "For you, nothing!", "No soup for you!", "Get out!"],
		correctIndex: 2,
		image: "http://i.telegraph.co.uk/multimedia/archive/02964/SoupNazi1_2964691k.jpg"
	}, {
		question: "What does Kramer accuse Calvin Klein of stealing from him?",
		answers: ["His shoes", "An underwear style", "His credit card", "A cologne he invented"],
		correctIndex: 3,
		image: "http://cdn.playbuzz.com/cdn/0a9b3361-3273-4f39-9047-d96fa5f15d7b/1dafc16f-b3d7-4a72-895b-59d10b861a97.jpg"
	}, {
		question: "Why couldn't Jerry date Jillian?",
		answers: ["She had implants", "Her man hands", "He couldn't remember her name", "She made him feel nauseous"],
		correctIndex: 1,
		image: "http://kramersapartment.com/wp-content/uploads/gillian-the-bizarro-jerry-seinfeld.jpg"
	}, {
		question: "In the final episode, what was the last topic of conversation when they were all in the jail cell together?",
		answers: ["How bad the food is in jail", "How they miss the diner", "How the second button on a shirt can be too high", "What movie they're going to see when they get out"],
		correctIndex: 2,
		image: "http://cdn.pastemagazine.com/www/blogs/lists/2013/08/21/seinfeld-prison.jpg"
	}]
	
questionsAnswered=0

questionsCorrect=0

$('.endPic').hide();
$('.themeSong').hide();

$('.startQuiz').on('click', function() {
	showQuestion();
	$('.startQuiz').fadeOut();
	$('.startingPic').fadeOut();
	$('.questionWrapper').fadeIn();
	$('.startAgain').hide();
});

function showQuestion() {
	var questionObject=questions[currentQuestion];
	$('.question').text(questionObject.question);
	$('.imageWrapper').html('<img src="'+questionObject.image+'">');
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
		$('.endPic').show();
		$('.imageWrapper').hide();
		$('#answerList button:disabled').remove();
		$('.feedback').html('<p class="finished">Great Try! You got: '+questionsCorrect+' correct out of '+questionsAnswered+'</p>');
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
	$('.endPic').hide();
	$('.question').show();
	$('.nextQuestion').show();
	$('.feedback').html('');
	$('.imageWrapper').show();
	showQuestion();
})

});

