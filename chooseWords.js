//Choose Words


var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getNRandomWords = function(wordArray, num) {
	var index = [];
	var result = [];
	for(var n=0; n<num; n++){
 			var proceed = false;
 			while(proceed != true){
 				var temp = getRandomInt(0, wordArray.length-1);
 				if(index.indexOf(temp) === -1){
 					index.push(temp);
 					result.push(wordArray[temp].translation.english);
 					result.push(wordArray[temp].translation.spanish);
 					proceed = true;
 				}
 			}			
 	}
 	return result;
}

var easyWords= [guile, evade, feign, grim, exalt, fetid];



/** function for choosing N words 
	params: level, num, 
**/
var chooseWords= function(level, num) {
	
	//easy levels
 	if(level>=1 && level<= 5){
 		getNRandomWords(easyWords, num); 
 	}
}

for(var i= 0; i<6; i++){
  document.getElementById(i).innerHTML= words[i].translation.english;
  document.getElementById(i+6).innerHTML= words[i].translation.spanish;
}






