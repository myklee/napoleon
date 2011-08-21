$(document).ready(function() {
  
  
  $('#translate').click(function(){
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
  	  	$('#translated span').text(all);

  	  	//$translated.animate({opacity:1 },{duration:150, easing: 'swing'});
  	  	$('#translated').slideDown(600);
  	
  	  	//$translated.animate({padding: '.5em'}, {duration:2000});
	}); 
	  
	$("#english").keydown(function(event){
		if(event.keyCode == 13){
			$("#translate").click();
		}
	});
	
	
});