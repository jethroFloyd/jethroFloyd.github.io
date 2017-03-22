// Generated from generator.c 


var output = $('output');
var input = $('textarea.input');
var toOutput;
input.keypress(function(e) {
	if (e.which == 13) {
		var inputVal = $.trim(input.val());
		if (inputVal.toLowerCase.indexOf("ls")>=0) {
			ls();
			input.Val('');
		} else {
			Output('<span>Oops. <br>You outsmarted me. Try something else.</span></br>');
			input.val('');
		}
	}
});

