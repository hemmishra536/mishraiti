// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['EA (1).JPG','EA (2).JPG','EA (3).JPG','EA (4).JPG','EA (5).JPG','EA (6).JPG','EA (7).JPG','EA (8).JPG','EA (9).JPG','EA (10).JPG','EA (11).JPG','EA (12).JPG','EA (13).JPG','EA (14).JPG','EA (15).JPG','EA (16).JPG','EA (17).JPG','EA (18).JPG','EA (19).JPG','EA (20).JPG','EA (21).JPG','EA (22).JPG','EA (23).JPG','EA (24).JPG','EA (25).JPG','EA (26).JPG','EA (27).JPG','EA (28).JPG','EA (29).JPG','EA (30).JPG','EA (31).JPG','EA (32).JPG','EA (33).JPG','EA (34).JPG','EA (35).JPG','EA (36).JPG','EA (37).JPG','EA (38).JPG','EA (39).JPG','EA (40).JPG','EA (41).JPG','EA (42).JPG','EA (43).JPG','EA (44).JPG','EA (45).JPG','EA (46).JPG','EA (47).JPG','EA (48).JPG','EA (49).JPG','EA (50).JPG','EA (51).JPG','EA (52).JPG','EA (53).JPG','EA (54).JPG','EA (55).JPG','EA (56).JPG','EA (57).JPG','EA (58).JPG','EA (59).JPG','EA (60).JPG','EA (61).JPG','EA (62).JPG','EA (63).JPG','EA (64).JPG','EA (65).JPG','EA (66).JPG','EA (67).JPG','EA (68).JPG','EA (69).JPG','EA (70).JPG','EA (71).JPG','EA (72).JPG','EA (73).JPG','EA (74).JPG','EA (75).JPG','EA (76).JPG','EA (77).JPG','EA (78).JPG','EA (79).JPG','EA (80).JPG','EA (81).JPG','EA (82).JPG','EA (83).JPG','EA (84).JPG','EA (85).JPG','EA (86).JPG','EA (87).JPG','EA (88).JPG','EA (89).JPG','EA (90).JPG','EA (91).JPG','EA (92).JPG','EA (93).JPG','EA (94).JPG','EA (95).JPG','EA (96).JPG','EA (97).JPG','EA (98).JPG','EA (99).JPG','EA (100).JPG','EA (101).JPG','EA (102).JPG','EA (103).JPG','EA (104).JPG','EA (105).JPG','EA (106).JPG','EA (107).JPG','EA (108).JPG','EA (109).JPG','EA (110).JPG','EA (111).JPG','EA (112).JPG','EA (113).JPG','EA (114).JPG','EA (115).JPG','EA (116).JPG','EA (117).JPG','EA (118).JPG','EA (119).JPG','EA (120).JPG','EA (121).JPG','EA (122).JPG','EA (123).JPG','EA (124).JPG','EA (125).JPG','EA (126).JPG','EA (127).JPG','EA (128).JPG','EA (129).JPG','EA (130).JPG','EA (131).JPG','EA (132).JPG','EA (133).JPG','EA (134).JPG','EA (135).JPG','EA (136).JPG','EA (137).JPG','EA (138).JPG','EA (139).JPG','EA (140).JPG','EA (141).JPG','EA (142).JPG'];
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
function myImages1(){
	 i = 49;
	i++;
	return setImg();
    
	
}

function myImages2(){
	 i = 99;
	i++;
	return setImg();		 
}
function myImages3(){
	 i = 149;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}
