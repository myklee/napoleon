$(document).ready(function() {
  
  
  $('.bgImg').click(function(){
  	var english = $('#english').val();
  	var split = english.split(" ");
  	var $translated = $('#translated');
  	var all = '';
  	
  		$.each(split, function() { 
	  		var word = this.toString() + '-' + this.substring(0,1) + 'ay';
	  		if (word.length > 5) {
	  		word = word.substring(1);
  			} else {}
  		
			all = all + word + ' ';
		});  	  	
  	  	$translated.text(all);
  	  	$('#pl').animate({opacity:1},{duration:650, easing: 'swing'});
	}); 
	  
	$("#english").keydown(function(event){
		if(event.keyCode == 13){
			$(".bgImg").click();
		}
	});
	
	
});