jQuery(document).ready(function($) {
  /*
	$(document).on('click', function() {
		$('body').removeClass('anim-start');
		setTimeout(function() {
			$('body').addClass('anim-start');
		}, 100);
	});
  */
  
    setTimeout(function() {
     $('body').toggleClass('anim-start');
    }, 500);
  
	 setInterval(function() {
      $('body').removeClass('anim-start');
      setTimeout(function() {
        $('body').addClass('anim-start');
      }, 50);
    }, 5*1000);

});