$('#about').hide();
$('#contact').hide();

$('li a').on('click', function (){
	$('article').hide();
	var article=$(this).attr('data-panel');
	$('#'+article).show();

});

$('li').on('click', function (){
	$('li').removeClass('active');
	$(this).addClass('active');
})


	






//$('article').hide();
//$('#home').show();
//$('li').on('click', function (){
	//$('article').hide();
		//var id ="#"+$(this).text();

//$(id).show;
//});





//$('li a').on('click', function (){
	//var article=$(this).attr('data panel');
	


	//$('#about').hide();
	//$('#contact').hide();

//});

