// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['A (1).JPG','A (2).JPG','A (3).JPG','A (4).JPG','A (5).JPG','A (6).JPG','A (7).JPG','A (8).JPG','A (9).JPG','A (10).JPG','A (11).JPG','A (12).JPG','A (13).JPG','A (14).JPG','A (15).JPG','A (16).JPG','A (17).JPG','A (18).JPG','A (19).JPG','A (20).JPG','A (21).JPG','A (22).JPG','A (23).JPG','A (24).JPG','A (25).JPG','A (26).JPG','A (27).JPG','A (28).JPG','A (29).JPG','A (30).JPG','A (31).JPG','A (32).JPG','A (33).JPG','A (34).JPG','A (35).JPG','A (36).JPG','A (37).JPG','A (38).JPG','A (39).JPG','A (40).JPG','A (41).JPG','A (42).JPG','A (43).JPG','A (44).JPG','A (45).JPG','A (46).JPG','A (47).JPG','A (48).JPG','A (49).JPG','A (50).JPG','A (51).JPG','A (52).JPG','A (53).JPG','A (54).JPG','A (55).JPG','A (56).JPG','A (57).JPG','A (58).JPG','A (59).JPG','A (60).JPG','A (61).JPG','A (62).JPG','A (63).JPG','A (64).JPG','A (65).JPG','A (66).JPG','A (67).JPG','A (68).JPG','A (69).JPG','A (70).JPG','A (71).JPG','A (72).JPG','A (73).JPG','A (74).JPG','A (75).JPG','A (76).JPG','A (77).JPG','A (78).JPG','A (79).JPG','A (80).JPG','A (81).JPG','A (82).JPG','A (83).JPG','A (84).JPG','A (85).JPG','A (86).JPG','A (87).JPG','A (88).JPG','A (89).JPG','A (90).JPG','A (91).JPG','A (92).JPG','A (93).JPG','A (94).JPG','A (95).JPG','A (96).JPG','A (97).JPG','A (98).JPG','A (99).JPG','A (100).JPG','A (101).JPG','A (102).JPG','A (103).JPG','A (104).JPG','A (105).JPG','A (106).JPG','A (107).JPG','A (108).JPG','A (109).JPG','A (110).JPG','A (111).JPG','A (112).JPG','A (113).JPG','A (114).JPG','A (115).JPG','A (116).JPG','A (117).JPG','A (118).JPG','A (119).JPG','A (120).JPG','A (121).JPG','A (122).JPG','A (123).JPG','A (124).JPG','A (125).JPG','A (126).JPG','A (127).JPG','A (128).JPG','A (129).JPG','A (130).JPG','A (131).JPG','A (132).JPG','A (133).JPG','A (134).JPG','A (135).JPG','A (136).JPG','A (137).JPG','A (138).JPG','A (139).JPG','A (140).JPG','A (141).JPG','A (142).JPG','A (143).JPG','A (144).JPG','A (145).JPG','A (146).JPG','A (147).JPG','A (148).JPG','A (149).JPG','A (150).JPG','A (151).JPG','A (152).JPG','A (153).JPG','A (154).JPG','A (155).JPG','A (156).JPG','A (157).JPG','A (158).JPG','A (159).JPG','A (160).JPG','A (161).JPG','A (162).JPG','A (163).JPG','A (164).JPG','A (165).JPG','A (166).JPG','A (167).JPG','A (168).JPG','A (169).JPG','A (170).JPG','A (171).JPG','A (172).JPG','A (173).JPG','A (174).JPG','A (175).JPG','A (176).JPG','A (177).JPG','A (178).JPG','A (179).JPG','A (180).JPG','A (181).JPG','A (182).JPG','A (183).JPG','A (184).JPG','A (185).JPG','A (186).JPG','A (187).JPG','A (188).JPG','A (189).JPG','A (190).JPG','A (191).JPG','A (192).JPG','A (193).JPG','A (194).JPG','A (195).JPG','A (196).JPG','A (197).JPG','A (198).JPG','A (199).JPG','A (200).JPG','A (201).JPG','A (202).JPG','A (203).JPG','A (204).JPG','A (205).JPG','A (206).JPG','A (207).JPG','A (208).JPG','A (209).JPG','A (210).JPG','A (211).JPG','A (212).JPG','A (213).JPG','A (214).JPG','A (215).JPG','A (216).JPG','A (217).JPG','A (218).JPG','A (219).JPG','A (220).JPG','A (221).JPG','A (222).JPG','A (223).JPG','A (224).JPG','A (225).JPG','A (226).JPG','A (227).JPG','A (228).JPG','A (229).JPG','A (230).JPG','A (231).JPG','A (232).JPG','A (233).JPG','A (234).JPG','A (235).JPG','A (236).JPG','A (237).JPG','A (238).JPG','A (239).JPG','A (240).JPG','A (241).JPG','A (242).JPG','A (243).JPG','A (244).JPG','A (245).JPG','A (246).JPG','A (247).JPG','A (248).JPG','A (249).JPG','A (250).JPG','A (251).JPG','A (252).JPG','A (253).JPG','A (254).JPG','A (255).JPG','A (256).JPG','A (257).JPG','A (258).JPG','A (259).JPG','A (260).JPG','A (261).JPG','A (262).JPG','A (263).JPG','A (264).JPG','A (265).JPG','A (266).JPG','A (267).JPG','A (268).JPG','A (269).JPG','A (270).JPG','A (271).JPG','A (272).JPG','A (273).JPG','A (274).JPG','A (275).JPG','A (276).JPG','A (277).JPG','A (278).JPG','A (279).JPG','A (280).JPG','A (281).JPG','A (282).JPG','A (283).JPG','A (284).JPG','A (285).JPG','A (286).JPG','A (287).JPG','A (288).JPG','A (289).JPG','A (290).JPG','A (291).JPG','A (292).JPG','A (293).JPG','A (294).JPG','A (295).JPG','A (296).JPG','A (297).JPG','A (298).JPG','A (299).JPG','A (300).JPG','A (301).JPG','A (302).JPG','A (303).JPG','A (304).JPG','A (305).JPG','A (306).JPG','A (307).JPG','A (308).JPG'];
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
