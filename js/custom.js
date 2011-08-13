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
  		} else {};
//  		var translated = $pig.join(" ");
		all = all + word + ' ';
		return all;
  	  	});
  	  	
  	  	$translated.text(all);
	  }); 
});