// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['A (1).JPG','A (2).JPG','A (3).JPG','A (4).JPG','A (5).JPG','A (6).JPG','A (7).JPG','A (8).JPG','A (9).JPG','A (10).JPG','A (11).JPG','A (12).JPG','A (13).JPG','A (14).JPG','A (15).JPG','A (16).JPG','A (17).JPG','A (18).JPG','A (19).JPG','A (20).JPG','A (21).JPG','A (22).JPG','A (23).JPG','A (24).JPG','A (25).JPG','A (26).JPG','A (27).JPG','A (28).JPG','A (29).JPG','A (30).JPG','A (31).JPG','A (32).JPG','A (33).JPG','A (34).JPG','A (35).JPG','A (36).JPG','A (37).JPG','A (38).JPG','A (39).JPG','A (40).JPG'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}