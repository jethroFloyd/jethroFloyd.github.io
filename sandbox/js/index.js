// Generated from generator.c 


var output = $('.output');
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
		} else if (inputVal.indexOf("why_retro")>=0) {
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



function separator() {
	Output('<span class="separator">== == == == == == == == == == == == == == == == == ==</span></br>');
}

function Output(data) {
	$(data).appendTo(output);
}

function help() {
	separator();
	var outputArray = ['>help','who','why-retro','contact','what','infosec','money','thoughts','...and some hidden stuff.'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function who() {
	separator();
	var outputArray = ['>who','Rito, aka jethroFloyd.','I like creating new things (especially if they create value in return - for me and others).','Also, pineapples should be mandatory on pizzas.'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function why_retro() {
	separator();
	var outputArray = ['>why-retro','Just like that! I change the look of my site often.'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function contact() {
	separator();
	var outputArray = ['>contact','For personal: rito@rito.tech','For Aficionado Ventures: ritobroto@aficionadoventures.com','For Consultancy: rito@panfried.co','Chitchat: CryptoCat; my handle is jethroFloyd.'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function what() {
	separator();
	var outputArray = ['>what','What what? I didn\'t get you.'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function infosec() {
	separator();
	var outputArray = ['>infosec','I used to be active in infosec. Now not so much.','But I still build stuff occasionally. Now I am working on a project called TFTT (check my github).'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function money() {
	separator();
	var outputArray = ['>money','I don\'t have it. But I want it.','So I am starting up in that hope.','I am also available for consultancy. Drop me a message.'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function thoughts() {
	separator();
	var outputArray = ['>thoughts','blog.rito.tech'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function ls() {
	separator();
	var outputArray = ['>ls','You want to look inside me? Too soon, mate; too soon.'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function pwd() {
	separator();
	var outputArray = ['>pwd','All of us are here. Where else would we go?'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function man() {
	separator();
	var outputArray = ['>man','Dude!'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function sudo() {
	separator();
	var outputArray = ['>sudo','Haha. You really thought you could do that?'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function apt() {
	separator();
	var outputArray = ['>apt','Thanks for your concern, I am updated'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function cd() {
	separator();
	var outputArray = ['>cd','You\'re leaving?'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function mkdir() {
	separator();
	var outputArray = ['>mkdir','Only I can do that.'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

function rm() {
	separator();
	var outputArray = ['>rm','RM: Rito Maitra. That\'s me. Good to meet you, too.'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

