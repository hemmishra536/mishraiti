// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['TF (1).JPG','TF (2).JPG','TF (3).JPG','TF (4).JPG','TF (5).JPG','TF (6).JPG','TF (7).JPG','TF (8).JPG','TF (9).JPG','TF (10).JPG','TF (11).JPG','TF (12).JPG','TF (13).JPG','TF (14).JPG','TF (15).JPG','TF (16).JPG','TF (17).JPG','TF (18).JPG','TF (19).JPG','TF (20).JPG','TF (21).JPG','TF (22).JPG','TF (23).JPG','TF (24).JPG','TF (25).JPG','TF (26).JPG','TF (27).JPG','TF (28).JPG','TF (29).JPG','TF (30).JPG','TF (31).JPG','TF (32).JPG','TF (33).JPG','TF (34).JPG','TF (35).JPG','TF (36).JPG','TF (37).JPG','TF (38).JPG','TF (39).JPG','TF (40).JPG','TF (41).JPG','TF (42).JPG','TF (43).JPG','TF (44).JPG','TF (45).JPG','TF (46).JPG','TF (47).JPG','TF (48).JPG','TF (49).JPG','TF (50).JPG','TF (51).JPG','TF (52).JPG','TF (53).JPG','TF (54).JPG','TF (55).JPG','TF (56).JPG','TF (57).JPG','TF (58).JPG','TF (59).JPG','TF (60).JPG','TF (61).JPG','TF (62).JPG','TF (63).JPG','TF (64).JPG','TF (65).JPG','TF (66).JPG','TF (67).JPG','TF (68).JPG','TF (69).JPG','TF (70).JPG','TF (71).JPG','TF (72).JPG','TF (73).JPG','TF (74).JPG','TF (75).JPG','TF (76).JPG','TF (77).JPG','TF (78).JPG','TF (79).JPG','TF (80).JPG','TF (81).JPG','TF (82).JPG','TF (83).JPG','TF (84).JPG','TF (85).JPG','TF (86).JPG','TF (87).JPG','TF (88).JPG','TF (89).JPG','TF (90).JPG','TF (91).JPG','TF (92).JPG','TF (93).JPG','TF (94).JPG','TF (95).JPG','TF (96).JPG','TF (97).JPG','TF (98).JPG','TF (99).JPG','TF (100).JPG','TF (101).JPG','TF (102).JPG','TF (103).JPG','TF (104).JPG','TF (105).JPG','TF (106).JPG','TF (107).JPG','TF (108).JPG','TF (109).JPG','TF (110).JPG','TF (111).JPG','TF (112).JPG','TF (113).JPG','TF (114).JPG','TF (115).JPG','TF (116).JPG','TF (117).JPG','TF (118).JPG','TF (119).JPG','TF (120).JPG','TF (121).JPG','TF (122).JPG','TF (123).JPG','TF (124).JPG','TF (125).JPG','TF (126).JPG','TF (127).JPG','TF (128).JPG','TF (129).JPG','TF (130).JPG','TF (131).JPG','TF (132).JPG','TF (133).JPG','TF (134).JPG','TF (135).JPG','TF (136).JPG','TF (137).JPG','TF (138).JPG','TF (139).JPG','TF (140).JPG','TF (141).JPG','TF (142).JPG','TF (143).JPG','TF (144).JPG','TF (145).JPG','TF (146).JPG','TF (147).JPG','TF (148).JPG','TF (149).JPG','TF (150).JPG','TF (151).JPG','TF (152).JPG','TF (153).JPG','TF (154).JPG','TF (155).JPG','TF (156).JPG','TF (157).JPG','TF (158).JPG','TF (159).JPG','TF (160).JPG','TF (161).JPG','TF (162).JPG','TF (163).JPG','TF (164).JPG','TF (165).JPG','TF (166).JPG','TF (167).JPG','TF (168).JPG','TF (169).JPG','TF (170).JPG','TF (171).JPG','TF (172).JPG','TF (173).JPG','TF (174).JPG','TF (175).JPG','TF (176).JPG','TF (177).JPG','TF (178).JPG','TF (179).JPG','TF (180).JPG','TF (181).JPG','TF (182).JPG','TF (183).JPG','TF (184).JPG','TF (185).JPG','TF (186).JPG','TF (187).JPG','TF (188).JPG','TF (189).JPG','TF (190).JPG','TF (191).JPG','TF (192).JPG','TF (193).JPG','TF (194).JPG','TF (195).JPG','TF (196).JPG','TF (197).JPG','TF (198).JPG','TF (199).JPG','TF (200).JPG','TF (201).JPG','TF (202).JPG','TF (203).JPG','TF (204).JPG'];
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