// Generated from generator.c 


var output = $('output');
var input = $('textarea.input');
var toOutput;
input.keypress(function(e) {
	if (e.which == 13) {
		var inputVal = $.trim(input.val());
		if (inputVal.indexOf("help")>=0) {
			help();
			input.Val('');
		} else if (inputVal.indexOf("who")>=0) {
			who();
			input.Val('');
		} else if (inputVal.indexOf("why-retro")>=0) {
			why-retro();
			input.Val('');
		} else if (inputVal.indexOf("contact")>=0) {
			contact();
			input.Val('');
		} else if (inputVal.indexOf("what")>=0) {
			what();
			input.Val('');
		} else if (inputVal.indexOf("infosec")>=0) {
			infosec();
			input.Val('');
		} else if (inputVal.indexOf("money")>=0) {
			money();
			input.Val('');
		} else if (inputVal.indexOf("thoughts")>=0) {
			thoughts();
			input.Val('');
		} else if (inputVal.indexOf("ls")>=0) {
			ls();
			input.Val('');
		} else if (inputVal.indexOf("pwd")>=0) {
			pwd();
			input.Val('');
		} else if (inputVal.indexOf("man")>=0) {
			man();
			input.Val('');
		} else if (inputVal.indexOf("sudo")>=0) {
			sudo();
			input.Val('');
		} else if (inputVal.indexOf("apt")>=0) {
			apt();
			input.Val('');
		} else if (inputVal.indexOf("cd")>=0) {
			cd();
			input.Val('');
		} else if (inputVal.indexOf("mkdir")>=0) {
			mkdir();
			input.Val('');
		} else if (inputVal.indexOf("rm")>=0) {
			rm();
			input.Val('');
		} else {
			Output('<span>Oops. <br>You outsmarted me. Try something else.</span></br>');
			input.val('');
		}
	}
});



