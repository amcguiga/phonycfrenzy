$( document ).ready(function() {
    console.log( "ready!" );

    //This equals a jquery object
	//This jquery object references all the boxes that have a class that contains "box"
	//the .box is how we defined that
	//$('.box');


	//sets a click handler to the box
	//passes in a function
	//this funciton is triggered whenever a click occur
	$('.box').click( function clickBox(e) {
		// the box that the event was triggered on
		//$(this);

		var kids = $(this).children('.shown');
		console.log(kids);
		kids.first().hide();

		var kidss = $(this).children('.hidden');
		console.log(kidss);
		kidss.first().show();

	});
/*
	$('img').click( function clickTheImg(event){
		//$(this);
		//var image = $( event.target).children();
		//image.hide();
		console.log("image");
	}); */
});

