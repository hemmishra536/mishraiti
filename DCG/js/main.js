// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['DCG (1).JPG','DCG (2).JPG','DCG (3).JPG','DCG (4).JPG','DCG (5).JPG','DCG (6).JPG','DCG (7).JPG','DCG (8).JPG','DCG (9).JPG','DCG (10).JPG','DCG (11).JPG','DCG (12).JPG','DCG (13).JPG','DCG (14).JPG','DCG (15).JPG','DCG (16).JPG','DCG (17).JPG','DCG (18).JPG','DCG (19).JPG','DCG (20).JPG','DCG (21).JPG','DCG (22).JPG','DCG (23).JPG','DCG (24).JPG','DCG (25).JPG','DCG (26).JPG','DCG (27).JPG','DCG (28).JPG','DCG (29).JPG','DCG (30).JPG','DCG (31).JPG','DCG (32).JPG','DCG (33).JPG','DCG (34).JPG','DCG (35).JPG','DCG (36).JPG','DCG (37).JPG','DCG (38).JPG','DCG (39).JPG','DCG (40).JPG','DCG (41).JPG','DCG (42).JPG','DCG (43).JPG','DCG (44).JPG','DCG (45).JPG','DCG (46).JPG','DCG (47).JPG','DCG (48).JPG','DCG (49).JPG','DCG (50).JPG','DCG (51).JPG','DCG (52).JPG','DCG (53).JPG','DCG (54).JPG','DCG (55).JPG','DCG (56).JPG','DCG (57).JPG','DCG (58).JPG','DCG (59).JPG','DCG (60).JPG','DCG (61).JPG','DCG (62).JPG','DCG (63).JPG','DCG (64).JPG','DCG (65).JPG','DCG (66).JPG','DCG (67).JPG','DCG (68).JPG','DCG (69).JPG','DCG (70).JPG','DCG (71).JPG','DCG (72).JPG','DCG (73).JPG','DCG (74).JPG','DCG (75).JPG','DCG (76).JPG','DCG (77).JPG','DCG (78).JPG','DCG (79).JPG','DCG (80).JPG','DCG (81).JPG','DCG (82).JPG','DCG (83).JPG','DCG (84).JPG','DCG (85).JPG','DCG (86).JPG','DCG (87).JPG','DCG (88).JPG','DCG (89).JPG','DCG (90).JPG','DCG (91).JPG','DCG (92).JPG','DCG (93).JPG','DCG (94).JPG','DCG (95).JPG','DCG (96).JPG','DCG (97).JPG','DCG (98).JPG','DCG (99).JPG','DCG (100).JPG','DCG (101).JPG','DCG (102).JPG','DCG (103).JPG','DCG (104).JPG','DCG (105).JPG','DCG (106).JPG','DCG (107).JPG','DCG (108).JPG','DCG (109).JPG','DCG (110).JPG','DCG (111).JPG','DCG (112).JPG','DCG (113).JPG','DCG (114).JPG','DCG (115).JPG','DCG (116).JPG','DCG (117).JPG','DCG (118).JPG','DCG (119).JPG','DCG (120).JPG','DCG (121).JPG','DCG (122).JPG','DCG (123).JPG','DCG (124).JPG','DCG (125).JPG','DCG (126).JPG','DCG (127).JPG','DCG (128).JPG','DCG (129).JPG','DCG (130).JPG','DCG (131).JPG','DCG (132).JPG','DCG (133).JPG','DCG (134).JPG','DCG (135).JPG','DCG (136).JPG','DCG (137).JPG','DCG (138).JPG','DCG (139).JPG','DCG (140).JPG','DCG (141).JPG','DCG (142).JPG','DCG (143).JPG','DCG (144).JPG','DCG (145).JPG','DCG (146).JPG','DCG (147).JPG','DCG (148).JPG','DCG (149).JPG','DCG (150).JPG','DCG (151).JPG','DCG (152).JPG','DCG (153).JPG','DCG (154).JPG','DCG (155).JPG','DCG (156).JPG','DCG (157).JPG','DCG (158).JPG','DCG (159).JPG','DCG (160).JPG','DCG (161).JPG','DCG (162).JPG','DCG (163).JPG','DCG (164).JPG','DCG (165).JPG','DCG (166).JPG','DCG (167).JPG','DCG (168).JPG','DCG (169).JPG','DCG (170).JPG','DCG (171).JPG','DCG (172).JPG','DCG (173).JPG','DCG (174).JPG','DCG (175).JPG','DCG (176).JPG','DCG (177).JPG','DCG (178).JPG','DCG (179).JPG','DCG (180).JPG','DCG (181).JPG','DCG (182).JPG','DCG (183).JPG','DCG (184).JPG','DCG (185).JPG','DCG (186).JPG','DCG (187).JPG','DCG (188).JPG','DCG (189).JPG','DCG (190).JPG','DCG (191).JPG','DCG (192).JPG','DCG (193).JPG','DCG (194).JPG','DCG (195).JPG','DCG (196).JPG','DCG (197).JPG'];
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