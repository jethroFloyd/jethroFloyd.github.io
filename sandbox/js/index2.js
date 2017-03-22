function seperator() {
	Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
;

function ls() {
	separator();
	var outputArray = ['>ls','hi','hello'];
	for (var  i = 0;  i < outputArray.length; i++) {
		var out = '<span>' + outputArray[i] + '</span></br>';
		Output(out);
	}
	separator();
}

