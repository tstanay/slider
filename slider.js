$(function(){
	var elWrap = $('.slider');
	window.el = elWrap.find('img');
	var indexImg = 0;
	var indexMax  = el.length;
	function change(){
		el.fadeOut(500);
		el.eq(indexImg).fadeIn(1200);
	}
	$('.next').click(function(){
		if(indexImg < indexMax-1){
			indexImg++;
		}else{
			indexImg = 0;
		}
		change();
	});
	
	$('.prev').click(function(){
		if(indexImg == 0){
			indexImg = indexMax-1;
		}else{
			indexImg--;
		}
		change();
	});
	
 });