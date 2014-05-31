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


});

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});