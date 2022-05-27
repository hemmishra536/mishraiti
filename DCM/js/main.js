// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['DCM (1)','DCM (2)','DCM (3)','DCM (4)','DCM (5)','DCM (6)','DCM (7)','DCM (8)','DCM (9)','DCM (10)','DCM (11)','DCM (12)','DCM (13)','DCM (14)','DCM (15)','DCM (16)','DCM (17)','DCM (18)','DCM (19)','DCM (20)','DCM (21)','DCM (22)','DCM (23)','DCM (24)','DCM (25)','DCM (26)','DCM (27)','DCM (28)','DCM (29)','DCM (30)','DCM (31)','DCM (32)','DCM (33)','DCM (34)','DCM (35)','DCM (36)','DCM (37)','DCM (38)','DCM (39)','DCM (40)','DCM (41)','DCM (42)','DCM (43)','DCM (44)','DCM (45)','DCM (46)','DCM (47)','DCM (48)','DCM (49)','DCM (50)','DCM (51)','DCM (52)','DCM (53)','DCM (54)','DCM (55)','DCM (56)','DCM (57)','DCM (58)','DCM (59)','DCM (60)','DCM (61)','DCM (62)','DCM (63)','DCM (64)','DCM (65)','DCM (66)','DCM (67)','DCM (68)','DCM (69)','DCM (70)','DCM (71)','DCM (72)','DCM (73)','DCM (74)','DCM (75)','DCM (76)','DCM (77)','DCM (78)','DCM (79)','DCM (80)','DCM (81)','DCM (82)','DCM (83)','DCM (84)','DCM (85)','DCM (86)','DCM (87)','DCM (88)','DCM (89)','DCM (90)','DCM (91)','DCM (92)','DCM (93)','DCM (94)','DCM (95)','DCM (96)','DCM (97)','DCM (98)','DCM (99)','DCM (100)','DCM (101)','DCM (102)','DCM (103)','DCM (104)','DCM (105)','DCM (106)','DCM (107)','DCM (108)','DCM (109)','DCM (110)','DCM (111)','DCM (112)','DCM (113)','DCM (114)','DCM (115)','DCM (116)','DCM (117)','DCM (118)','DCM (119)','DCM (120)','DCM (121)','DCM (122)','DCM (123)','DCM (124)','DCM (125)','DCM (126)','DCM (127)','DCM (128)','DCM (129)','DCM (130)','DCM (131)','DCM (132)','DCM (133)','DCM (134)','DCM (135)','DCM (136)','DCM (137)','DCM (138)','DCM (139)','DCM (140)','DCM (141)','DCM (142)','DCM (143)','DCM (144)','DCM (145)','DCM (146)','DCM (147)','DCM (148)','DCM (149)','DCM (150)','DCM (151)','DCM (152)','DCM (153)','DCM (154)','DCM (155)','DCM (156)','DCM (157)','DCM (158)','DCM (159)','DCM (160)','DCM (161)','DCM (162)','DCM (163)','DCM (164)','DCM (165)','DCM (166)','DCM (167)','DCM (168)','DCM (169)','DCM (170)','DCM (171)','DCM (172)','DCM (173)','DCM (174)','DCM (175)','DCM (176)','DCM (177)','DCM (178)','DCM (179)','DCM (180)','DCM (181)','DCM (182)','DCM (183)','DCM (184)','DCM (185)','DCM (186)','DCM (187)','DCM (188)','DCM (189)','DCM (190)','DCM (191)','DCM (192)'];
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