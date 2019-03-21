function submitQuiz() {
		console.log('submitted');

		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
					var answerValue = Number(radiosNo[i].value);
				}
			}
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3'));
		console.log("CalcScore: " + calcScore); 
		function correctAnswer (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber); 
		}
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

		var showScore = "Your Score: " + calcScore +"/3" ;
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});