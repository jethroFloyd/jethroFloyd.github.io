// Generated from generator.c 


var output = $('.output');
var input = $('textarea.input');
var toOutput;
input.keypress(function(e) {
	if (e.which == 13) {
		var inputVal = $.trim(input.val());
		if (inputVal == "ls") {
			ls();
			input.Val('');
		} else {
			Output('<span>Oops. <br>You outsmarted me. Try something else.</span></br>');
			input.val('');
		}
	}
});

function separator() {
	Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
}

function Output(data) {
	$(data).appendTo(output);
}

function ls() {
	separator();
	var outputArray = ['>ls','test'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>'
		Output(out);
	}
	separator();
}


