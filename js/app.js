$(document).ready(function(){
	$('#date').val(new Date().toDateInputValue());

	$('.form_container li').find('input, textarea').on('keyup blur focus', function(e){

    // Cache our selectors
    var $this = $(this);
    var $label = $this.prev();

    if (e.type == 'keyup') {
        if( $this.val() == '' ) {
				  $label.addClass('js-hide-label');
				} else {
				  $label.removeClass('js-hide-label');
				}
    }
	});

	$('.submitBtn').click(function(){
		if($('input').val('Peter Parker')){
			$('.js-show-1').fadeOut();
			$('.js-show-2').fadeIn();
			$('.form_container').addClass('white_bg');
			$('input').val('');
			$('#date').val(new Date().toDateInputValue());
		}
		else{
		}
	});

	$('.js-show-page-2').click(function(){
		$('.js-show-2').fadeOut();
		$('.js-show-1').fadeIn();
		$('.form_container').removeClass('white_bg');
	});

});

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});