var numboxes=2;

$(document).ready(function(){
	creategrids(numboxes);
	$("h3").append('<span class="txt"> Default</span>');
	$("#reset").click(function(){
		numboxes =prompt("Enter a value x, between 0 and 80, it would result in x*x squares.");
		
		while(!(numboxes>1 && numboxes<80)){
			numboxes =prompt("Please enter the value in the range, the range is 0 to 80.");
		}
		
		cleargrids();
		creategrids(numboxes);
	});

	$("#random").click(function(){
		cleargrids();
		creategrids(numboxes);
		$("h3").append('<span class="txt"> Random</span>');
		$(".box").mouseenter(function(){
			$(this).css("background-color",randomcolor());	
		});
	
	});

	$("#opac").click(function(){
		cleargrids();
		creategrids(numboxes);
		$("h3").append('<span class="txt"> Opacity</span>');
		var opacity=1;
		var dec=parseFloat(1/(numboxes*5));
		
		$(".box").mouseenter(function(){
			$(this).fadeTo(500,opacity);
			opacity-=dec;
			if(opacity<=0)
				opacity=0.1;
		});
	})

	$("#trail").click(function(){
		cleargrids();
		creategrids(numboxes);
		$("h3").append('<span class="txt"> Trail</span>');
		$(".box").mouseenter(function(){
			$(this).fadeOut(500);
			$(this).fadeIn(500);	
		});
	
	});

});

function creategrids(numboxes){

	for(var i=0;i<numboxes*numboxes;i++){
		$(".container").append('<div class="box"></div>');
	}

	var h=parseFloat($(".container").css("height").replace('px',''));
	var w=parseFloat($(".container").css("width").replace('px',''));
	
	h=parseFloat((h-2*numboxes)/numboxes);
	w=parseFloat((w-2*numboxes)/numboxes);

	$(".box").css("height",h);
	$(".box").css("width",w);
}

function cleargrids(){
	$(".txt").remove();
	$(".box").remove();
}

function randomcolor(){
	var letters='123456789ABCDEF'.split('');
	var color='#';
	
	for(var i=0;i<6;i++){
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}
