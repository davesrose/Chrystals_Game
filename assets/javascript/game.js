$(document).ready(function() {

	//generates the magic number, from 19-120
	var generatedNumber = Math.floor((Math.random() * 120) + 19);

	//generates a random number for each crystal, ranging from 1-12
	var crystalOne = Math.floor((Math.random() * 12) + 1);
	var crystalTwo = Math.floor((Math.random() * 12) + 1);
	var crystalThree = Math.floor((Math.random() * 12) + 1);
	var crystalFour = Math.floor((Math.random() * 12) + 1);

	//global variables...the player's full score, the total number of wins, the total number of losses
	var userScore = 0;
	var wins = 0;
	var losses = 0;

	//display magic number on page
	$("#randomNumber").html(generatedNumber);

	//set click events for each crystal, passing the generated crystal values as parameters to the update function
	$("#userClick1").click(function() {
		update(crystalOne);
	});
	$("#userClick2").click(function() {
		update(crystalTwo);
	});
	$("#userClick3").click(function() {
		update(crystalThree);
	});
	$("#userClick4").click(function() {
		update(crystalFour);
	});

	//function for resetting
	function reset() {
		//generate random background image when page refreshes
		var backgroundImg = ["url('assets/images/Crystal1.jpg')","url('assets/images/Crystal2.jpg')","url('assets/images/Crystal3.jpg')","url('assets/images/Crystal4.jpg')","url('assets/images/Crystal5.jpg')"]
		var randImg = backgroundImg[Math.floor(Math.random() * backgroundImg.length)]
		$("html").css("background-image", randImg);

		//generate another random number
		generatedNumber = Math.floor((Math.random() * 120) + 19);
		$("#randomNumber").html(generatedNumber);

		//generate another set of random numbers for the crystals
		crystalOne = Math.floor((Math.random() * 12) + 1);
		crystalTwo = Math.floor((Math.random() * 12) + 1);
		crystalThree = Math.floor((Math.random() * 12) + 1);
		crystalFour = Math.floor((Math.random() * 12) + 1);

		//reset the player's score back to 0 and display on page
		userScore = 0;
		$("#userScore").html(userScore);
	};

	//function for updating the crystals' values and the player's score
	function update(crystal) {

		//add crystal parameters together
		userScore += crystal;
		//remove previous entries
		$("#userScore").empty();
		//add player's score value
		$("#userScore").append(userScore);

		//comment out for viewing crystal values and player's score
		// console.log("crystal values: " + crystalOne + " " + crystalTwo + " " + crystalThree + " " + crystalFour)
		// console.log("user score: " + userScore)

		//first conditional for when the player's score is greater than the magic number (a loss)
		if (userScore > generatedNumber) {
			//play sound for losing
			var snd = new Audio("assets/sounds/loser2.mp3"); // buffers automatically when created
			snd.play();

			//add a loss and display on page
			losses++;
			$("#loss").html(losses);

			//run reset function to reset page
			reset();
		}
		//second conditional for when the player's score is equal to the magic number (a win)
		else if (userScore == generatedNumber) {
			//play sound for wining
			var snd = new Audio("assets/sounds/win.mp3"); // buffers automatically when created
			snd.play();

			//add a win and display on page
			wins++;
			$("#win").html(wins);

			//run reset function to reset page
			reset();
		}
	};
});

