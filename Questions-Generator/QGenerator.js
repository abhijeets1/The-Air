module.exports = function() {
	var obj ={};
	obj.all = [];

	// for Easy
	obj.all[0] = Math.floor(Math.random()*98);
	obj.all[1] = 98 + Math.floor(Math.random()*98);
	obj.all[2] = 196 + Math.floor(Math.random()*98);
	obj.all[3] = 294 + Math.floor(Math.random()*98);
	
	// for Medium
	obj.all[4] = 392 + Math.floor(Math.random()*178);
	obj.all[5] = 392 + 178 + Math.floor(Math.random()*178);
	obj.all[6] = 392 + 365 + Math.floor(Math.random()*178);
	obj.all[7] = 392 + 534 + Math.floor(Math.random()*178);
	
	// for Hard
	obj.all[8] = 1101 + Math.floor(Math.random()*73);
	obj.all[9] = 1101 + 73 + Math.floor(Math.random()*73);
	obj.all[10] = 1101 + 146 + Math.floor(Math.random()*73);
	obj.all[11] = 1101 + 219 + Math.floor(Math.random()*73);
	
	// for School
	obj.all[12] = Math.floor(Math.random()*70);
	obj.all[13] = 70 + Math.floor(Math.random()*70);
	obj.all[14] = 140 + Math.floor(Math.random()*70);
	obj.all[15] = 210 + Math.floor(Math.random()*70);
	
	// for Easy
	obj.all[16] = Math.floor(Math.random()*250);
	obj.all[17] = 250 + Math.floor(Math.random()*250);
	obj.all[18] = 500 + Math.floor(Math.random()*250);
	obj.all[19] = 270 + Math.floor(Math.random()*252);
	
	// for Medium
	obj.all[20] = Math.floor(Math.random()*222);
	obj.all[21] = 222 + Math.floor(Math.random()*222);
	obj.all[22] = 444 + Math.floor(Math.random()*222);
	obj.all[23] = 666 + Math.floor(Math.random()*222);
	
	// for Hard
	obj.all[24] = Math.floor(Math.random()*111);
	obj.all[25] = 111 + Math.floor(Math.random()*111);
	obj.all[26] = 222 + Math.floor(Math.random()*111);
	obj.all[27] = 333 + Math.floor(Math.random()*111);
	
	// for Challenge
	obj.all[28] = Math.floor(Math.random()*35);
	obj.all[29] = 34 + Math.floor(Math.random()*35);
	obj.all[30] = 68 + Math.floor(Math.random()*35);
	obj.all[31] = 102 + Math.floor(Math.random()*35);

	return obj;
}