// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['DCM (1).jpg','DCM (2).jpg','DCM (3).jpg','DCM (4).jpg','DCM (5).jpg','DCM (6).jpg','DCM (7).jpg','DCM (8).jpg','DCM (9).jpg','DCM (10).jpg','DCM (11).jpg','DCM (12).jpg','DCM (13).jpg','DCM (14).jpg','DCM (15).jpg','DCM (16).jpg','DCM (17).jpg','DCM (18).jpg','DCM (19).jpg','DCM (20).jpg','DCM (21).jpg','DCM (22).jpg','DCM (23).jpg','DCM (24).jpg','DCM (25).jpg','DCM (26).jpg','DCM (27).jpg','DCM (28).jpg','DCM (29).jpg','DCM (30).jpg','DCM (31).jpg','DCM (32).jpg','DCM (33).jpg','DCM (34).jpg','DCM (35).jpg','DCM (36).jpg','DCM (37).jpg','DCM (38).jpg','DCM (39).jpg','DCM (40).jpg','DCM (41).jpg','DCM (42).jpg','DCM (43).jpg','DCM (44).jpg','DCM (45).jpg','DCM (46).jpg','DCM (47).jpg','DCM (48).jpg','DCM (49).jpg','DCM (50).jpg','DCM (51).jpg','DCM (52).jpg','DCM (53).jpg','DCM (54).jpg','DCM (55).jpg','DCM (56).jpg','DCM (57).jpg','DCM (58).jpg','DCM (59).jpg','DCM (60).jpg','DCM (61).jpg','DCM (62).jpg','DCM (63).jpg','DCM (64).jpg','DCM (65).jpg','DCM (66).jpg','DCM (67).jpg','DCM (68).jpg','DCM (69).jpg','DCM (70).jpg','DCM (71).jpg','DCM (72).jpg','DCM (73).jpg','DCM (74).jpg','DCM (75).jpg','DCM (76).jpg','DCM (77).jpg','DCM (78).jpg','DCM (79).jpg','DCM (80).jpg','DCM (81).jpg','DCM (82).jpg','DCM (83).jpg','DCM (84).jpg','DCM (85).jpg','DCM (86).jpg','DCM (87).jpg','DCM (88).jpg','DCM (89).jpg','DCM (90).jpg','DCM (91).jpg','DCM (92).jpg','DCM (93).jpg','DCM (94).jpg','DCM (95).jpg','DCM (96).jpg','DCM (97).jpg','DCM (98).jpg','DCM (99).jpg','DCM (100).jpg','DCM (101).jpg','DCM (102).jpg','DCM (103).jpg','DCM (104).jpg','DCM (105).jpg','DCM (106).jpg','DCM (107).jpg','DCM (108).jpg','DCM (109).jpg','DCM (110).jpg','DCM (111).jpg','DCM (112).jpg','DCM (113).jpg','DCM (114).jpg','DCM (115).jpg','DCM (116).jpg','DCM (117).jpg','DCM (118).jpg','DCM (119).jpg','DCM (120).jpg','DCM (121).jpg','DCM (122).jpg','DCM (123).jpg','DCM (124).jpg','DCM (125).jpg','DCM (126).jpg','DCM (127).jpg','DCM (128).jpg','DCM (129).jpg','DCM (130).jpg','DCM (131).jpg','DCM (132).jpg','DCM (133).jpg','DCM (134).jpg','DCM (135).jpg','DCM (136).jpg','DCM (137).jpg','DCM (138).jpg','DCM (139).jpg','DCM (140).jpg','DCM (141).jpg','DCM (142).jpg','DCM (143).jpg','DCM (144).jpg','DCM (145).jpg','DCM (146).jpg','DCM (147).jpg','DCM (148).jpg','DCM (149).jpg','DCM (150).jpg','DCM (151).jpg','DCM (152).jpg','DCM (153).jpg','DCM (154).jpg','DCM (155).jpg','DCM (156).jpg','DCM (157).jpg','DCM (158).jpg','DCM (159).jpg','DCM (160).jpg','DCM (161).jpg','DCM (162).jpg','DCM (163).jpg','DCM (164).jpg','DCM (165).jpg','DCM (166).jpg','DCM (167).jpg','DCM (168).jpg','DCM (169).jpg','DCM (170).jpg','DCM (171).jpg','DCM (172).jpg','DCM (173).jpg','DCM (174).jpg','DCM (175).jpg','DCM (176).jpg','DCM (177).jpg','DCM (178).jpg','DCM (179).jpg','DCM (180).jpg','DCM (181).jpg','DCM (182).jpg','DCM (183).jpg','DCM (184).jpg','DCM (185).jpg','DCM (186).jpg','DCM (187).jpg','DCM (188).jpg','DCM (189).jpg','DCM (190).jpg','DCM (191).jpg','DCM (192).jpg'];
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
