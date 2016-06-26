var carousel=["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg"];

var counter= 0;

$('#next').click(function () {
	counter +=1
	$('#image-to-vote-on').attr('src', carousel[counter]);

	if (counter >=5)
	$('#next').attr('disabled', 'true');
	
});



$('#prev').click(function () {
	counter -=1
	$('#image-to-vote-on').attr('src', carousel[counter]);


	if (counter <=0){
	$('#prev').attr('disabled', 'true');
}

	if (counter <5){
	$('#next').attr('disbaled', 'false');
}

});


