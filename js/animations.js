
$(document).ready(function(){
$('.stats').hide();
$('.reply').hide();

$('.tweet-compose').on('click', function (e) {
	var self = $('.tweet-compose').height();
	$('.tweet-compose').css('height', self * 2);
	$('#tweet-controls').show();

});

$('stream').on('click','tweet',function(){
	$(this).find('.stats').show();
	$(this).find('.reply').show();
});

$('stream').on('click','tweet',function(){
	
});

$(".tweet-compose").on("keyup", function(){
       var count = $(".tweet-compose").val().length;
       var remaining = 140 - count;

       $("#char-count").text(remaining);

       if (remaining <= 10) {
           $("#char-count").css("color", "red");
       }
       else if (remaining > 10) {
           $("#char-count").css("color", "#999");
       }

       if (count > 140) {
           $(".button").attr("disabled", "disabled");
       }
       else if (count <= 140) {
           $(".button").removeAttr("disabled", "disabled");
       }
	});


	$('.button').on('click', function(e){
	var el = $('.tweet:first').clone();
	el.find('.avatar').prop('src','img/alagoon.jpg')
	el.find('.fullname').html('Ben Callis');
	el.find('username')
	el.find('.tweet-text').html($('.tweet-compose').val());
	$('#stream').prepend(el);

});

});

	

	

