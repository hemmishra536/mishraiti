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
function myImages1(){
i = 1;
	i++;
return setImg();
 }
function myImages2(){
i = 1;
	i++;
return setImg();
 }
function myImages3(){
i = 3;
	i++;
return setImg();
 }
function myImages4(){
i = 5;
	i++;
return setImg();
 }
function myImages5(){
i = 7;
	i++;
return setImg();
 }
function myImages6(){
i = 9;
	i++;
return setImg();
 }
function myImages7(){
i = 11;
	i++;
return setImg();
 }
function myImages8(){
i = 13;
	i++;
return setImg();
 }
function myImages9(){
i = 15;
	i++;
return setImg();
 }
function myImages10(){
i = 17;
	i++;
return setImg();
 }
function myImages11(){
i = 19;
	i++;
return setImg();
 }
function myImages12(){
i = 21;
	i++;
return setImg();
 }
function myImages13(){
i = 23;
	i++;
return setImg();
 }
function myImages14(){
i = 25;
	i++;
return setImg();
 }
function myImages15(){
i = 27;
	i++;
return setImg();
 }
function myImages16(){
i = 29;
	i++;
return setImg();
 }
function myImages17(){
i = 31;
	i++;
return setImg();
 }
function myImages18(){
i = 33;
	i++;
return setImg();
 }
function myImages19(){
i = 35;
	i++;
return setImg();
 }
function myImages20(){
i = 37;
	i++;
return setImg();
 }
function myImages21(){
i = 39;
	i++;
return setImg();
 }
function myImages22(){
i = 41;
	i++;
return setImg();
 }
function myImages23(){
i = 43;
	i++;
return setImg();
 }
function myImages24(){
i = 45;
	i++;
return setImg();
 }
function myImages25(){
i = 47;
	i++;
return setImg();
 }
function myImages26(){
i = 49;
	i++;
return setImg();
 }
function myImages27(){
i = 51;
	i++;
return setImg();
 }
function myImages28(){
i = 53;
	i++;
return setImg();
 }
function myImages29(){
i = 55;
	i++;
return setImg();
 }
function myImages30(){
i = 57;
	i++;
return setImg();
 }
function myImages31(){
i = 59;
	i++;
return setImg();
 }
function myImages32(){
i = 61;
	i++;
return setImg();
 }
function myImages33(){
i = 63;
	i++;
return setImg();
 }
function myImages34(){
i = 65;
	i++;
return setImg();
 }
function myImages35(){
i = 67;
	i++;
return setImg();
 }
function myImages36(){
i = 69;
	i++;
return setImg();
 }
function myImages37(){
i = 71;
	i++;
return setImg();
 }
function myImages38(){
i = 73;
	i++;
return setImg();
 }
function myImages39(){
i = 75;
	i++;
return setImg();
 }
function myImages40(){
i = 77;
	i++;
return setImg();
 }
function myImages41(){
i = 79;
	i++;
return setImg();
 }
function myImages42(){
i = 81;
	i++;
return setImg();
 }
function myImages43(){
i = 83;
	i++;
return setImg();
 }
function myImages44(){
i = 85;
	i++;
return setImg();
 }
function myImages45(){
i = 87;
	i++;
return setImg();
 }
function myImages46(){
i = 89;
	i++;
return setImg();
 }
function myImages47(){
i = 91;
	i++;
return setImg();
 }
function myImages48(){
i = 93;
	i++;
return setImg();
 }
function myImages49(){
i = 95;
	i++;
return setImg();
 }
function myImages50(){
i = 97;
	i++;
return setImg();
 }
function myImages51(){
i = 99;
	i++;
return setImg();
 }
function myImages52(){
i = 101;
	i++;
return setImg();
 }
function myImages53(){
i = 103;
	i++;
return setImg();
 }
function myImages54(){
i = 105;
	i++;
return setImg();
 }
function myImages55(){
i = 107;
	i++;
return setImg();
 }
function myImages56(){
i = 109;
	i++;
return setImg();
 }
function myImages57(){
i = 111;
	i++;
return setImg();
 }
function myImages58(){
i = 113;
	i++;
return setImg();
 }
function myImages59(){
i = 115;
	i++;
return setImg();
 }
function myImages60(){
i = 117;
	i++;
return setImg();
 }
function myImages61(){
i = 119;
	i++;
return setImg();
 }
function myImages62(){
i = 121;
	i++;
return setImg();
 }
function myImages63(){
i = 123;
	i++;
return setImg();
 }
function myImages64(){
i = 125;
	i++;
return setImg();
 }
function myImages65(){
i = 127;
	i++;
return setImg();
 }
function myImages66(){
i = 129;
	i++;
return setImg();
 }
function myImages67(){
i = 131;
	i++;
return setImg();
 }
function myImages68(){
i = 133;
	i++;
return setImg();
 }
function myImages69(){
i = 135;
	i++;
return setImg();
 }
function myImages70(){
i = 137;
	i++;
return setImg();
 }
function myImages71(){
i = 139;
	i++;
return setImg();
 }
function myImages72(){
i = 141;
	i++;
return setImg();
 }
function myImages73(){
i = 143;
	i++;
return setImg();
 }
function myImages74(){
i = 145;
	i++;
return setImg();
 }
function myImages75(){
i = 147;
	i++;
return setImg();
 }
function myImages76(){
i = 149;
	i++;
return setImg();
 }
function myImages77(){
i = 151;
	i++;
return setImg();
 }
function myImages78(){
i = 153;
	i++;
return setImg();
 }
function myImages79(){
i = 155;
	i++;
return setImg();
 }
function myImages80(){
i = 157;
	i++;
return setImg();
 }
function myImages81(){
i = 159;
	i++;
return setImg();
 }
function myImages82(){
i = 161;
	i++;
return setImg();
 }
function myImages83(){
i = 163;
	i++;
return setImg();
 }
function myImages84(){
i = 165;
	i++;
return setImg();
 }
function myImages85(){
i = 167;
	i++;
return setImg();
 }
function myImages86(){
i = 169;
	i++;
return setImg();
 }
function myImages87(){
i = 171;
	i++;
return setImg();
 }
function myImages88(){
i = 173;
	i++;
return setImg();
 }
function myImages89(){
i = 175;
	i++;
return setImg();
 }
function myImages90(){
i = 177;
	i++;
return setImg();
 }
function myImages91(){
i = 179;
	i++;
return setImg();
 }
function myImages92(){
i = 181;
	i++;
return setImg();
 }
function myImages93(){
i = 183;
	i++;
return setImg();
 }
function myImages94(){
i = 185;
	i++;
return setImg();
 }
function myImages95(){
i = 187;
	i++;
return setImg();
 }
function myImages96(){
i = 189;
	i++;
return setImg();
 }
function myImages97(){
i = 191;
	i++;
return setImg();
 }
function myImages98(){
i = 193;
	i++;
return setImg();
 }
function myImages99(){
i = 195;
	i++;
return setImg();
 }
function myImages100(){
i = 197;
	i++;
return setImg();
 }
function myImages101(){
i = 199;
	i++;
return setImg();
 }
function myImages102(){
i = 201;
	i++;
return setImg();
 }
function myImages103(){
i = 203;
	i++;
return setImg();
 }
function myImages104(){
i = 205;
	i++;
return setImg();
 }
function myImages105(){
i = 207;
	i++;
return setImg();
 }
function myImages106(){
i = 209;
	i++;
return setImg();
 }
function myImages107(){
i = 211;
	i++;
return setImg();
 }
function myImages108(){
i = 49;
	i++;
return setImg();
 }
function myImages109(){
i = 49;
	i++;
return setImg();
 }
function myImages110(){
i = 49;
	i++;
return setImg();
 }
function myImages111(){
i = 49;
	i++;
return setImg();
 }
function myImages112(){
i = 49;
	i++;
return setImg();
 }
function myImages113(){
i = 49;
	i++;
return setImg();
 }
function myImages114(){
i = 49;
	i++;
return setImg();
 }
function myImages115(){
i = 49;
	i++;
return setImg();
 }
function myImages116(){
i = 49;
	i++;
return setImg();
 }
function myImages117(){
i = 49;
	i++;
return setImg();
 }
function myImages118(){
i = 49;
	i++;
return setImg();
 }
function myImages119(){
i = 49;
	i++;
return setImg();
 }
function myImages120(){
i = 49;
	i++;
return setImg();
 }
function myImages121(){
i = 49;
	i++;
return setImg();
 }
function myImages122(){
i = 49;
	i++;
return setImg();
 }
function myImages123(){
i = 49;
	i++;
return setImg();
 }
function myImages124(){
i = 49;
	i++;
return setImg();
 }
function myImages125(){
i = 49;
	i++;
return setImg();
 }
function myImages126(){
i = 49;
	i++;
return setImg();
 }
function myImages127(){
i = 49;
	i++;
return setImg();
 }
function myImages128(){
i = 49;
	i++;
return setImg();
 }
function myImages129(){
i = 49;
	i++;
return setImg();
 }
function myImages130(){
i = 49;
	i++;
return setImg();
 }
function myImages131(){
i = 49;
	i++;
return setImg();
 }
function myImages132(){
i = 49;
	i++;
return setImg();
 }
function myImages133(){
i = 49;
	i++;
return setImg();
 }
function myImages134(){
i = 49;
	i++;
return setImg();
 }
function myImages135(){
i = 49;
	i++;
return setImg();
 }
function myImages136(){
i = 49;
	i++;
return setImg();
 }
function myImages137(){
i = 49;
	i++;
return setImg();
 }
function myImages138(){
i = 49;
	i++;
return setImg();
 }
function myImages139(){
i = 49;
	i++;
return setImg();
 }
function myImages140(){
i = 49;
	i++;
return setImg();
 }
function myImages141(){
i = 49;
	i++;
return setImg();
 }
function myImages142(){
i = 49;
	i++;
return setImg();
 }
function myImages143(){
i = 49;
	i++;
return setImg();
 }
function myImages144(){
i = 49;
	i++;
return setImg();
 }
function myImages145(){
i = 49;
	i++;
return setImg();
 }
function myImages146(){
i = 49;
	i++;
return setImg();
 }
function myImages147(){
i = 49;
	i++;
return setImg();
 }
function myImages148(){
i = 49;
	i++;
return setImg();
 }
function myImages149(){
i = 49;
	i++;
return setImg();
 }
function myImages150(){
i = 49;
	i++;
return setImg();
 }
function myImages151(){
i = 49;
	i++;
return setImg();
 }
function myImages152(){
i = 49;
	i++;
return setImg();
 }
function myImages153(){
i = 49;
	i++;
return setImg();
 }
function myImages154(){
i = 49;
	i++;
return setImg();
 }
function myImages155(){
i = 49;
	i++;
return setImg();
 }
function myImages156(){
i = 49;
	i++;
return setImg();
 }
function myImages157(){
i = 49;
	i++;
return setImg();
 }
function myImages158(){
i = 49;
	i++;
return setImg();
 }
function myImages159(){
i = 49;
	i++;
return setImg();
 }
function myImages160(){
i = 49;
	i++;
return setImg();
 }
function myImages161(){
i = 49;
	i++;
return setImg();
 }
function myImages162(){
i = 49;
	i++;
return setImg();
 }
function myImages163(){
i = 49;
	i++;
return setImg();
 }
function myImages164(){
i = 49;
	i++;
return setImg();
 }
function myImages165(){
i = 49;
	i++;
return setImg();
 }
function myImages166(){
i = 49;
	i++;
return setImg();
 }
function myImages167(){
i = 49;
	i++;
return setImg();
 }
function myImages168(){
i = 49;
	i++;
return setImg();
 }
function myImages169(){
i = 49;
	i++;
return setImg();
 }
function myImages170(){
i = 49;
	i++;
return setImg();
 }
function myImages171(){
i = 49;
	i++;
return setImg();
 }
function myImages172(){
i = 49;
	i++;
return setImg();
 }
function myImages173(){
i = 49;
	i++;
return setImg();
 }
function myImages174(){
i = 49;
	i++;
return setImg();
 }
function myImages175(){
i = 49;
	i++;
return setImg();
 }
function myImages176(){
i = 49;
	i++;
return setImg();
 }
function myImages177(){
i = 49;
	i++;
return setImg();
 }
function myImages178(){
i = 49;
	i++;
return setImg();
 }
function myImages179(){
i = 49;
	i++;
return setImg();
 }
function myImages180(){
i = 49;
	i++;
return setImg();
 }
function myImages181(){
i = 49;
	i++;
return setImg();
 }
function myImages182(){
i = 49;
	i++;
return setImg();
 }
function myImages183(){
i = 49;
	i++;
return setImg();
 }
function myImages184(){
i = 49;
	i++;
return setImg();
 }
function myImages185(){
i = 49;
	i++;
return setImg();
 }
function myImages186(){
i = 49;
	i++;
return setImg();
 }
function myImages187(){
i = 49;
	i++;
return setImg();
 }
function myImages188(){
i = 49;
	i++;
return setImg();
 }
function myImages189(){
i = 49;
	i++;
return setImg();
 }
function myImages190(){
i = 49;
	i++;
return setImg();
 }
function myImages191(){
i = 49;
	i++;
return setImg();
 }
function myImages192(){
i = 49;
	i++;
return setImg();
 }
function myImages193(){
i = 49;
	i++;
return setImg();
 }
function myImages194(){
i = 49;
	i++;
return setImg();
 }
function myImages195(){
i = 49;
	i++;
return setImg();
 }
function myImages196(){
i = 49;
	i++;
return setImg();
 }
function myImages197(){
i = 49;
	i++;
return setImg();
 }
function myImages198(){
i = 49;
	i++;
return setImg();
 }
function myImages199(){
i = 49;
	i++;
return setImg();
 }
function myImages200(){
i = 49;
	i++;
return setImg();
 }
function myImages201(){
i = 49;
	i++;
return setImg();
 }
function myImages202(){
i = 49;
	i++;
return setImg();
 }
function myImages203(){
i = 49;
	i++;
return setImg();
 }
function myImages204(){
i = 49;
	i++;
return setImg();
 }
function myImages205(){
i = 49;
	i++;
return setImg();
 }
function myImages206(){
i = 49;
	i++;
return setImg();
 }
function myImages207(){
i = 49;
	i++;
return setImg();
 }
function myImages208(){
i = 49;
	i++;
return setImg();
 }
function myImages209(){
i = 49;
	i++;
return setImg();
 }
function myImages210(){
i = 49;
	i++;
return setImg();
 }
function myImages211(){
i = 49;
	i++;
return setImg();
 }
function myImages212(){
i = 49;
	i++;
return setImg();
 }
function myImages213(){
i = 49;
	i++;
return setImg();
 }
function myImages214(){
i = 49;
	i++;
return setImg();
 }
function myImages215(){
i = 49;
	i++;
return setImg();
 }
function myImages216(){
i = 49;
	i++;
return setImg();
 }
function myImages217(){
i = 49;
	i++;
return setImg();
 }
function myImages218(){
i = 49;
	i++;
return setImg();
 }
function myImages219(){
i = 49;
	i++;
return setImg();
 }
function myImages220(){
i = 49;
	i++;
return setImg();
 }
function myImages221(){
i = 49;
	i++;
return setImg();
 }
function myImages222(){
i = 49;
	i++;
return setImg();
 }
function myImages223(){
i = 49;
	i++;
return setImg();
 }
function myImages224(){
i = 49;
	i++;
return setImg();
 }
function myImages225(){
i = 49;
	i++;
return setImg();
 }
function myImages226(){
i = 49;
	i++;
return setImg();
 }
function myImages227(){
i = 49;
	i++;
return setImg();
 }
function myImages228(){
i = 49;
	i++;
return setImg();
 }
function myImages229(){
i = 49;
	i++;
return setImg();
 }
function myImages230(){
i = 49;
	i++;
return setImg();
 }
function myImages231(){
i = 49;
	i++;
return setImg();
 }
function myImages232(){
i = 49;
	i++;
return setImg();
 }
function myImages233(){
i = 49;
	i++;
return setImg();
 }
function myImages234(){
i = 49;
	i++;
return setImg();
 }
function myImages235(){
i = 49;
	i++;
return setImg();
 }
function myImages236(){
i = 49;
	i++;
return setImg();
 }
function myImages237(){
i = 49;
	i++;
return setImg();
 }
function myImages238(){
i = 49;
	i++;
return setImg();
 }
function myImages239(){
i = 49;
	i++;
return setImg();
 }
function myImages240(){
i = 49;
	i++;
return setImg();
 }
function myImages241(){
i = 49;
	i++;
return setImg();
 }
function myImages242(){
i = 49;
	i++;
return setImg();
 }
function myImages243(){
i = 49;
	i++;
return setImg();
 }
function myImages244(){
i = 49;
	i++;
return setImg();
 }
function myImages245(){
i = 49;
	i++;
return setImg();
 }
function myImages246(){
i = 49;
	i++;
return setImg();
 }
function myImages247(){
i = 49;
	i++;
return setImg();
 }
function myImages248(){
i = 49;
	i++;
return setImg();
 }
function myImages249(){
i = 49;
	i++;
return setImg();
 }
function myImages250(){
i = 49;
	i++;
return setImg();
 }
function myImages251(){
i = 49;
	i++;
return setImg();
 }
function myImages252(){
i = 49;
	i++;
return setImg();
 }
function myImages253(){
i = 49;
	i++;
return setImg();
 }
function myImages254(){
i = 49;
	i++;
return setImg();
 }
function myImages255(){
i = 49;
	i++;
return setImg();
 }
function myImages256(){
i = 49;
	i++;
return setImg();
 }
function myImages257(){
i = 49;
	i++;
return setImg();
 }
function myImages258(){
i = 49;
	i++;
return setImg();
 }
function myImages259(){
i = 49;
	i++;
return setImg();
 }
function myImages260(){
i = 49;
	i++;
return setImg();
 }
function myImages261(){
i = 49;
	i++;
return setImg();
 }
function myImages262(){
i = 49;
	i++;
return setImg();
 }
function myImages263(){
i = 49;
	i++;
return setImg();
 }
function myImages264(){
i = 49;
	i++;
return setImg();
 }
function myImages265(){
i = 49;
	i++;
return setImg();
 }
function myImages266(){
i = 49;
	i++;
return setImg();
 }
function myImages267(){
i = 49;
	i++;
return setImg();
 }
function myImages268(){
i = 49;
	i++;
return setImg();
 }
function myImages269(){
i = 49;
	i++;
return setImg();
 }
function myImages270(){
i = 49;
	i++;
return setImg();
 }
function myImages271(){
i = 49;
	i++;
return setImg();
 }
function myImages272(){
i = 49;
	i++;
return setImg();
 }
function myImages273(){
i = 49;
	i++;
return setImg();
 }
function myImages274(){
i = 49;
	i++;
return setImg();
 }
function myImages275(){
i = 49;
	i++;
return setImg();
 }
function myImages276(){
i = 49;
	i++;
return setImg();
 }
function myImages277(){
i = 49;
	i++;
return setImg();
 }
function myImages278(){
i = 49;
	i++;
return setImg();
 }
function myImages279(){
i = 49;
	i++;
return setImg();
 }
function myImages280(){
i = 49;
	i++;
return setImg();
 }
function myImages281(){
i = 49;
	i++;
return setImg();
 }
function myImages282(){
i = 49;
	i++;
return setImg();
 }
function myImages283(){
i = 49;
	i++;
return setImg();
 }
function myImages284(){
i = 49;
	i++;
return setImg();
 }
function myImages285(){
i = 49;
	i++;
return setImg();
 }
function myImages286(){
i = 49;
	i++;
return setImg();
 }
function myImages287(){
i = 49;
	i++;
return setImg();
 }
function myImages288(){
i = 49;
	i++;
return setImg();
 }
function myImages289(){
i = 49;
	i++;
return setImg();
 }
function myImages290(){
i = 49;
	i++;
return setImg();
 }
function myImages291(){
i = 49;
	i++;
return setImg();
 }
function myImages292(){
i = 49;
	i++;
return setImg();
 }
function myImages293(){
i = 49;
	i++;
return setImg();
 }
function myImages294(){
i = 49;
	i++;
return setImg();
 }
function myImages295(){
i = 49;
	i++;
return setImg();
 }
function myImages296(){
i = 49;
	i++;
return setImg();
 }
function myImages297(){
i = 49;
	i++;
return setImg();
 }
function myImages298(){
i = 49;
	i++;
return setImg();
 }
function myImages299(){
i = 49;
	i++;
return setImg();
 }
function myImages300(){
i = 49;
	i++;
return setImg();
 }
function myImages301(){
i = 49;
	i++;
return setImg();
 }
function myImages302(){
i = 49;
	i++;
return setImg();
 }
function myImages303(){
i = 49;
	i++;
return setImg();
 }
function myImages304(){
i = 49;
	i++;
return setImg();
 }
function myImages305(){
i = 49;
	i++;
return setImg();
 }
function myImages306(){
i = 49;
	i++;
return setImg();
 }
function myImages307(){
i = 49;
	i++;
return setImg();
 }
function myImages308(){
i = 49;
	i++;
return setImg();
 }
function myImages309(){
i = 49;
	i++;
return setImg();
 }
function myImages310(){
i = 49;
	i++;
return setImg();
 }
function myImages311(){
i = 49;
	i++;
return setImg();
 }
function myImages312(){
i = 49;
	i++;
return setImg();
 }
function myImages313(){
i = 49;
	i++;
return setImg();
 }
function myImages314(){
i = 49;
	i++;
return setImg();
 }
function myImages315(){
i = 49;
	i++;
return setImg();
 }
function myImages316(){
i = 49;
	i++;
return setImg();
 }
function myImages317(){
i = 49;
	i++;
return setImg();
 }
function myImages318(){
i = 49;
	i++;
return setImg();
 }
function myImages319(){
i = 49;
	i++;
return setImg();
 }
function myImages320(){
i = 49;
	i++;
return setImg();
 }
function myImages321(){
i = 49;
	i++;
return setImg();
 }
function myImages322(){
i = 49;
	i++;
return setImg();
 }
function myImages323(){
i = 49;
	i++;
return setImg();
 }
function myImages324(){
i = 49;
	i++;
return setImg();
 }
function myImages325(){
i = 49;
	i++;
return setImg();
 }
function myImages326(){
i = 49;
	i++;
return setImg();
 }
function myImages327(){
i = 49;
	i++;
return setImg();
 }
function myImages328(){
i = 49;
	i++;
return setImg();
 }
function myImages329(){
i = 49;
	i++;
return setImg();
 }
function myImages330(){
i = 49;
	i++;
return setImg();
 }
function myImages331(){
i = 49;
	i++;
return setImg();
 }
function myImages332(){
i = 49;
	i++;
return setImg();
 }
function myImages333(){
i = 49;
	i++;
return setImg();
 }
function myImages334(){
i = 49;
	i++;
return setImg();
 }
function myImages335(){
i = 49;
	i++;
return setImg();
 }
function myImages336(){
i = 49;
	i++;
return setImg();
 }
function myImages337(){
i = 49;
	i++;
return setImg();
 }
function myImages338(){
i = 49;
	i++;
return setImg();
 }
function myImages339(){
i = 49;
	i++;
return setImg();
 }
function myImages340(){
i = 49;
	i++;
return setImg();
 }
function myImages341(){
i = 49;
	i++;
return setImg();
 }
function myImages342(){
i = 49;
	i++;
return setImg();
 }
function myImages343(){
i = 49;
	i++;
return setImg();
 }
function myImages344(){
i = 49;
	i++;
return setImg();
 }
function myImages345(){
i = 49;
	i++;
return setImg();
 }
function myImages346(){
i = 49;
	i++;
return setImg();
 }
function myImages347(){
i = 49;
	i++;
return setImg();
 }
function myImages348(){
i = 49;
	i++;
return setImg();
 }
function myImages349(){
i = 49;
	i++;
return setImg();
 }
function myImages350(){
i = 49;
	i++;
return setImg();
 }
function myImages351(){
i = 49;
	i++;
return setImg();
 }
function myImages352(){
i = 49;
	i++;
return setImg();
 }
function myImages353(){
i = 49;
	i++;
return setImg();
 }
function myImages354(){
i = 49;
	i++;
return setImg();
 }
function myImages355(){
i = 49;
	i++;
return setImg();
 }
function myImages356(){
i = 49;
	i++;
return setImg();
 }
function myImages357(){
i = 49;
	i++;
return setImg();
 }
function myImages358(){
i = 49;
	i++;
return setImg();
 }
function myImages359(){
i = 49;
	i++;
return setImg();
 }
function myImages360(){
i = 49;
	i++;
return setImg();
 }
function myImages361(){
i = 49;
	i++;
return setImg();
 }
function myImages362(){
i = 49;
	i++;
return setImg();
 }
function myImages363(){
i = 49;
	i++;
return setImg();
 }
function myImages364(){
i = 49;
	i++;
return setImg();
 }
function myImages365(){
i = 49;
	i++;
return setImg();
 }
function myImages366(){
i = 49;
	i++;
return setImg();
 }
function myImages367(){
i = 49;
	i++;
return setImg();
 }
function myImages368(){
i = 49;
	i++;
return setImg();
 }
function myImages369(){
i = 49;
	i++;
return setImg();
 }
function myImages370(){
i = 49;
	i++;
return setImg();
 }
function myImages371(){
i = 49;
	i++;
return setImg();
 }
function myImages372(){
i = 49;
	i++;
return setImg();
 }
function myImages373(){
i = 49;
	i++;
return setImg();
 }
function myImages374(){
i = 49;
	i++;
return setImg();
 }
function myImages375(){
i = 49;
	i++;
return setImg();
 }
function myImages376(){
i = 49;
	i++;
return setImg();
 }
function myImages377(){
i = 49;
	i++;
return setImg();
 }
function myImages378(){
i = 49;
	i++;
return setImg();
 }
function myImages379(){
i = 49;
	i++;
return setImg();
 }
function myImages380(){
i = 49;
	i++;
return setImg();
 }
function myImages381(){
i = 49;
	i++;
return setImg();
 }
function myImages382(){
i = 49;
	i++;
return setImg();
 }
function myImages383(){
i = 49;
	i++;
return setImg();
 }
function myImages384(){
i = 49;
	i++;
return setImg();
 }
function myImages385(){
i = 49;
	i++;
return setImg();
 }
function myImages386(){
i = 49;
	i++;
return setImg();
 }
function myImages387(){
i = 49;
	i++;
return setImg();
 }
function myImages388(){
i = 49;
	i++;
return setImg();
 }
function myImages389(){
i = 49;
	i++;
return setImg();
 }
function myImages390(){
i = 49;
	i++;
return setImg();
 }
function myImages391(){
i = 49;
	i++;
return setImg();
 }
function myImages392(){
i = 49;
	i++;
return setImg();
 }
function myImages393(){
i = 49;
	i++;
return setImg();
 }
function myImages394(){
i = 49;
	i++;
return setImg();
 }
function myImages395(){
i = 49;
	i++;
return setImg();
 }
function myImages396(){
i = 49;
	i++;
return setImg();
 }
function myImages397(){
i = 49;
	i++;
return setImg();
 }
function myImages398(){
i = 49;
	i++;
return setImg();
 }
function myImages399(){
i = 49;
	i++;
return setImg();
 }
function myImages400(){
i = 49;
	i++;
return setImg();
 }
function myImages401(){
i = 49;
	i++;
return setImg();
 }
function myImages402(){
i = 49;
	i++;
return setImg();
 }
function myImages403(){
i = 49;
	i++;
return setImg();
 }
function myImages404(){
i = 49;
	i++;
return setImg();
 }
function myImages405(){
i = 49;
	i++;
return setImg();
 }
function myImages406(){
i = 49;
	i++;
return setImg();
 }
function myImages407(){
i = 49;
	i++;
return setImg();
 }
function myImages408(){
i = 49;
	i++;
return setImg();
 }
function myImages409(){
i = 49;
	i++;
return setImg();
 }
function myImages410(){
i = 49;
	i++;
return setImg();
 }
function myImages411(){
i = 49;
	i++;
return setImg();
 }
function myImages412(){
i = 49;
	i++;
return setImg();
 }
function myImages413(){
i = 49;
	i++;
return setImg();
 }
function myImages414(){
i = 49;
	i++;
return setImg();
 }
function myImages415(){
i = 49;
	i++;
return setImg();
 }
function myImages416(){
i = 49;
	i++;
return setImg();
 }
function myImages417(){
i = 49;
	i++;
return setImg();
 }
function myImages418(){
i = 49;
	i++;
return setImg();
 }
function myImages419(){
i = 49;
	i++;
return setImg();
 }
function myImages420(){
i = 49;
	i++;
return setImg();
 }
function myImages421(){
i = 49;
	i++;
return setImg();
 }
function myImages422(){
i = 49;
	i++;
return setImg();
 }
function myImages423(){
i = 49;
	i++;
return setImg();
 }
function myImages424(){
i = 49;
	i++;
return setImg();
 }
function myImages425(){
i = 49;
	i++;
return setImg();
 }
function myImages426(){
i = 49;
	i++;
return setImg();
 }
function myImages427(){
i = 49;
	i++;
return setImg();
 }
function myImages428(){
i = 49;
	i++;
return setImg();
 }
function myImages429(){
i = 49;
	i++;
return setImg();
 }
function myImages430(){
i = 49;
	i++;
return setImg();
 }
function myImages431(){
i = 49;
	i++;
return setImg();
 }
function myImages432(){
i = 49;
	i++;
return setImg();
 }
function myImages433(){
i = 49;
	i++;
return setImg();
 }
function myImages434(){
i = 49;
	i++;
return setImg();
 }
function myImages435(){
i = 49;
	i++;
return setImg();
 }
function myImages436(){
i = 49;
	i++;
return setImg();
 }
function myImages437(){
i = 49;
	i++;
return setImg();
 }
function myImages438(){
i = 49;
	i++;
return setImg();
 }
function myImages439(){
i = 49;
	i++;
return setImg();
 }
function myImages440(){
i = 49;
	i++;
return setImg();
 }
function myImages441(){
i = 49;
	i++;
return setImg();
 }
function myImages442(){
i = 49;
	i++;
return setImg();
 }
function myImages443(){
i = 49;
	i++;
return setImg();
 }
function myImages444(){
i = 49;
	i++;
return setImg();
 }
function myImages445(){
i = 49;
	i++;
return setImg();
 }
function myImages446(){
i = 49;
	i++;
return setImg();
 }
function myImages447(){
i = 49;
	i++;
return setImg();
 }
function myImages448(){
i = 49;
	i++;
return setImg();
 }
function myImages449(){
i = 49;
	i++;
return setImg();
 }
function myImages450(){
i = 49;
	i++;
return setImg();
 }
function myImages451(){
i = 49;
	i++;
return setImg();
 }
function myImages452(){
i = 49;
	i++;
return setImg();
 }
function myImages453(){
i = 49;
	i++;
return setImg();
 }
function myImages454(){
i = 49;
	i++;
return setImg();
 }
function myImages455(){
i = 49;
	i++;
return setImg();
 }
function myImages456(){
i = 49;
	i++;
return setImg();
 }
function myImages457(){
i = 49;
	i++;
return setImg();
 }
function myImages458(){
i = 49;
	i++;
return setImg();
 }
function myImages459(){
i = 49;
	i++;
return setImg();
 }
function myImages460(){
i = 49;
	i++;
return setImg();
 }
function myImages461(){
i = 49;
	i++;
return setImg();
 }
function myImages462(){
i = 49;
	i++;
return setImg();
 }
function myImages463(){
i = 49;
	i++;
return setImg();
 }
function myImages464(){
i = 49;
	i++;
return setImg();
 }
function myImages465(){
i = 49;
	i++;
return setImg();
 }
function myImages466(){
i = 49;
	i++;
return setImg();
 }
function myImages467(){
i = 49;
	i++;
return setImg();
 }
function myImages468(){
i = 49;
	i++;
return setImg();
 }
function myImages469(){
i = 49;
	i++;
return setImg();
 }
function myImages470(){
i = 49;
	i++;
return setImg();
 }
function myImages471(){
i = 49;
	i++;
return setImg();
 }
function myImages472(){
i = 49;
	i++;
return setImg();
 }
function myImages473(){
i = 49;
	i++;
return setImg();
 }
function myImages474(){
i = 49;
	i++;
return setImg();
 }
function myImages475(){
i = 49;
	i++;
return setImg();
 }
function myImages476(){
i = 49;
	i++;
return setImg();
 }
function myImages477(){
i = 49;
	i++;
return setImg();
 }
function myImages478(){
i = 49;
	i++;
return setImg();
 }
function myImages479(){
i = 49;
	i++;
return setImg();
 }
function myImages480(){
i = 49;
	i++;
return setImg();
 }
function myImages481(){
i = 49;
	i++;
return setImg();
 }
function myImages482(){
i = 49;
	i++;
return setImg();
 }
function myImages483(){
i = 49;
	i++;
return setImg();
 }
function myImages484(){
i = 49;
	i++;
return setImg();
 }
function myImages485(){
i = 49;
	i++;
return setImg();
 }
function myImages486(){
i = 49;
	i++;
return setImg();
 }
function myImages487(){
i = 49;
	i++;
return setImg();
 }
function myImages488(){
i = 49;
	i++;
return setImg();
 }
function myImages489(){
i = 49;
	i++;
return setImg();
 }
function myImages490(){
i = 49;
	i++;
return setImg();
 }
function myImages491(){
i = 49;
	i++;
return setImg();
 }
function myImages492(){
i = 49;
	i++;
return setImg();
 }
function myImages493(){
i = 49;
	i++;
return setImg();
 }
function myImages494(){
i = 49;
	i++;
return setImg();
 }
function myImages495(){
i = 49;
	i++;
return setImg();
 }
function myImages496(){
i = 49;
	i++;
return setImg();
 }
function myImages497(){
i = 49;
	i++;
return setImg();
 }
function myImages498(){
i = 49;
	i++;
return setImg();
 }
function myImages499(){
i = 49;
	i++;
return setImg();
 }
function myImages500(){
i = 49;
	i++;
return setImg();
 }
function myFunction1() {
  document.getElementById("myP").style.visibility = "hidden";
} 

function myFunction2() {
  document.getElementById("myP").style.visibility = "visible";
} 

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}
