/*
Theme Name: joomi-Mini-Mo
Theme URI: https://templates.joomimart.com/demo/free/joomi-mini-mo/demo.html
Copyright 2014-2017 joomiMart
Author: joomiTemplates
Author URI: https://templates.joomimart.com/
Description: Responsive Multipurpose One Page Bootstrap HTML Template
Version: 1.0.1
Licensed under MIT https://github.com/joomimart-com/joomi-mini-mo/blob/master/LICENSE
Text Domain: joomi-Mini-Mo
*/

// scrollspy
$('body').scrollspy({ target: '#navbar-example' });

$('[data-spy="scroll"]').each(function () {
	var $spy = $(this).scrollspy('refresh')
});

$('#myScrollspy').on('activate.bs.scrollspy', function () {
});

// Contact Form
var form = $('#main-contact-form');
form.submit(function(event){
	event.preventDefault();
	var form_status = $('<div class="form_status"></div>');
	$.ajax({
		url: $(this).attr('action'),
		beforeSend: function(){
			form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
		}
		}).done(function(data){
		form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
	});
});

/* countdown product-list */
$(document).ready(function(){
	$('[data-countdown]')
	.each(function(){var $this=$(this),
		finalDate=$(this).data('countdown');
		$this.countdown(finalDate,function(event){
			var fomat='<span>%H</span><b></b><span>%M</span><b></b><span>%S</span>';
			$this.html(event.strftime(fomat));
		});
	});
	if($('.countdown-lastest').length>0){
		var labels=['Years','Months','Weeks','Days','Hrs','Mins','Secs'];
		var layout='<span class="count"><span class="num">{dnn}</span><span class="text">Days</span></span><span class="dot">:</span><span class="count"><span class="num">{hnn}</span><span class="text">Hrs</span></span><span class="dot">:</span><span class="count"><span class="num">{mnn}</span><span class="text">Mins</span></span><span class="dot">:</span><span class="count"><span class="num">{snn}</span><span class="text">Secs</span></span>';
		$('.countdown-lastest').each(function(){
			var austDay=new
			Date(
			$(this).data('y'),
			$(this).data('m')-1,
			$(this).data('d'),
			$(this).data('h'),
			$(this).data('i'),
			$(this).data('s')
			);
			$(this).countdown({until:austDay,labels:labels,layout:layout});
		});
	}
});