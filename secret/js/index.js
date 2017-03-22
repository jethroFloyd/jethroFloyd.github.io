// =====================
// Create required vars
// =====================
var output = $('.output');
var input = $('textarea.input');
var toOutput;

// Creates the event listner for the comands ==
// Yes this is a long one - could do with some
// improvements ===============================
input.keypress(function(e) {
	if (e.which == 13) {
		var inputVal = $.trim(input.val());
		//console.log(inputVal);

		if (inputVal == "help" || inputVal == "Help") {
			help();
			input.val('');
		} else if (inputVal == "ping" ) {
			pong();
			input.val('');
		} else if (inputVal == "joke" || inputVal == "Joke") {
			aboutMe();
			input.val('');
		} else if (inputVal == "snow" || inputVal == "Snow") {
			aboutMe2();
			input.val('');
		} else if (inputVal == "want" || inputVal == "Want") {
			aboutMe3();
			input.val('');
		} else if (inputVal.indexOf("hi") >=0 || inputVal.indexOf("Hi") >=0 || inputVal.indexOf("ello") >=0 || inputVal.indexOf("iss") >=0) {
			aboutMe6();
			input.val('');
		} else if (inputVal.indexOf("love") >=0 || inputVal.indexOf("Love") >= 0) {
			aboutMe4();
			input.val('');
		} else if (inputVal.indexOf("fuck") >=0 || inputVal.indexOf("sex") >= 0 || inputVal.indexOf("horny") >= 0 || inputVal.indexOf("Fuck") >= 0 || inputVal.indexOf("Sex") >= 0) {
			aboutMe5();
			input.val('');
		} else if (inputVal == "cute" || inputVal == "Cute") {
			contactMe();
			input.val('');
		} else if (inputVal == "clear" || inputVal == "Clear") {
			clearConsole();
			input.val('');
		} else {
			Output('<span>Oops. <br>Looks like this site is not smart enough yet.<br> Try another command.</span></br>');
			input.val('');
		}
	}
});

// functions related to the commands typed
// =======================================

// prints out a seperator
function seperator() {
	Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
}

//clears the screen
function clearConsole() {
	output.html("");
	Output('<span>clear</span></br>');
}

// prints out a list of "all" comands available
function help() {
	var commandsArray = ['Help: List of available commands', '>help: this menu', '>joke: I\'ll tell you a hilarious offensive joke', '>cute: cute stuff', '>snow: long term plan', '>want: self-explanatory', '>clear', '...and a couple of hidden commands.'];
	for (var i = 0; i < commandsArray.length; i++) {
		var out = '<span>' + commandsArray[i] + '</span><br/>'
		Output(out);
	}
}

// prints the result for the pong command
function pong() {
	Output('<span>pong</span></br><span class="pong"><b class="left">|</b><b class="right">|</b></span></br>');
}

// function to the say command
function sayThis(data) {
	data = data.substr(data.indexOf(' ') + 1);
	Output('<span class="green">[say]:</span><span>' + data + '</span></br>');
}

// sudo?!? not really
function sudo(data) {
	data = data.substr(data.indexOf(' ') + 1);
	if (data.startsWith("say") === true) {
		data = "Not gonna " + data + " to you, you don\'t own me!"
	} else if (data.startsWith("apt-get") === true) {
		data = "<span class='green'>Updating...</span> The cake is a lie! There is nothing to update..."
	} else {
		data = "The force is weak within you, my master you not be!"
	}
	Output('<span>' + data + '</span></br>');
}

// function to get current time...not
function getTime() {
	Output('<span>It\'s the 21st century man! Get a SmartWatch</span></br>');
}

function aboutMe() {
	var aboutMeArray = ['>Joke:', 'Here\'s an offensive and hilarious joke for you:', 'Feminism'];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

function aboutMe2() {
	var aboutMeArray = ['>Snow White:', 'The mirror says:', 'You\'re a thousand <\br>times more beautiful than you think you are.'];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

function aboutMe3() {
	var aboutMeArray = ['>Want:', 'Come back soon?'];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

function aboutMe4() {
	var aboutMeArray = ['>You found the hidden gem:', 'I love you too.'];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

function aboutMe5() {
	var aboutMeArray = ['>You found the hidden gem:', 'What a dirty mind lol'];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}


function aboutMe6() {
	var aboutMeArray = ['>Hi:', ':*'];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

function contactMe() {
	var contactArray = ['>Cute:', 'Rubs nosies. Kisses lightly. Cuddles and laughs.'];
	seperator();
	for (var i = 0; i < contactArray.length; i++) {
		var out = '<span>' + contactArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

// Prints out the result of the command into the output div
function Output(data) {
	$(data).appendTo(output);
}