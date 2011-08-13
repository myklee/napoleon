$(document).ready(function() {
  
  
  $('#translate').click(function(){
  	var english = $('#english').val();
  	var split = english.split(" ");
  	var $translated = $('#translated');
  	$.each(split, function() {
  		var translated = ''
  		var word = this.toString() + '-ay';	
  		
  		alert(word);
  	  	});
 
  });
});