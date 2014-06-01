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

				$('.js-show-1').fadeOut();
				console.log('test')

				var url = "proxy.php?url=lobbyist.herokuapp.com?"
				console.log("tset");

				if ($('#name').val() != "" && $('#company').val() != "" ) {
					url += "last=" + $('#name').val() + "&company" + $('#company').val();
				}
				else if ($('#name').val() != "") {
					url += "last=" + $('#name').val()
				}
				else if ($('#company').val() != "") {
					url += "company=" + $('#company').val();
				}

				var notFound = false;

				//alert(url);
				$('.load').html("<img src='loading.gif'>");
	    	$.get(url,function(data,status){
		    	console.log("Data: " + data + "\nStatus: " + status);
		    	
		    	if (data != '{"array":]}') {

				data = JSON.parse(data)
				console.log(data.array);
				console.log(data.array[0].OrganizationName);
				$('.organizationName').text(data.array[0].OrganizationName);


				$('.firstName').text(data.array[0].Lobbyist[0].FirstName);
				$('.lastName').text(data.array[0].Lobbyist[0].LastName);
				if (data.array[0].Lobbyist[0].FirstName == "") {
					$('.firstName').text("N/A");
				}
				if (data.array[0].Lobbyist[0].LastName == "") {
					$('.lastName').text("");
				}
				$('.load').html("");

				$('.js-show-3').fadeIn();
				$('.js-show-2').fadeOut();
				$('.js-show-1').fadeOut();
				$('.form_container').addClass('white_bg');
				}
				else {
					$('.js-show-2').fadeOut();
					$('.js-show-2').fadeIn();
					$('.form_container').addClass('white_bg');
				}
				
				

				$('.load').html("");

				$('.firstName').text('');
				$('.lastName').text($('#names').text);

			});

		  $('.js-show-3').fadeIn();
			$('.form_container').addClass('white_bg');
			$('input').val('');
			$('#date').val(new Date().toDateInputValue());
		
	});

	$('.js-hide-page-2').click(function(){
		$('.js-show-2').fadeOut();
		$('.js-show-1').fadeIn();
		$('.form_container').removeClass('white_bg');
	});

	$('.js-hide-page-3').click(function(){
		$('.js-show-3').fadeOut();
		$('.js-show-1').fadeIn();
		$('.form_container').removeClass('white_bg');
	});



});

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});