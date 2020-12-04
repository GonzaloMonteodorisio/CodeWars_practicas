//challenge 1: 
function multiply(a, b){
    a * b;
}

//console.log(multiply(3, 4));

//challenge 2: List Filtering
function filter_list(l) {
	var numArray = [];
	l.forEach(element => {
		if (typeof element === 'number') {
			numArray.push(element)
		}
	})	
	return numArray;
};

/*console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15])); 
console.log(filter_list([1,2,'aasf','1','123',123]));*/

//challenge 3: Complementary DNA
function DNAStrand(dna) {
	var dna1 = dna.replace(/T/g,"a");
	var dna2 = dna1.replace(/A/g,"t");
	var dna3 = dna2.replace(/C/g,"g");
	var dna4 = dna3.replace(/G/g,"c");
	var dnaComplementary = dna4.toUpperCase();
	return dnaComplementary;
}

/*console.log(DNAStrand ("ATTGC"));
console.log(DNAStrand ("GTAT"));*/

//challenge 4: Exes and Ohs
function XO(str) {

	var string = str;

	var indexOfO = [];
	var indexOfX = [];
	for(var i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === "o") indexOfO.push(i);
	}
	for(var i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === "x") indexOfX.push(i);
	}
	return (indexOfO.length === indexOfX.length);
};

/*console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));*/

//challenge 5: Equal Sides Of An Array
function findEvenIndex(arr) {
	for (var i=0; i<arr.length; i++) {
		var leftArray = arr.slice(0, i);
		var leftArraySum = 0;
		var rigthArray = arr.slice(i+1);
		var rigthArraySum = 0;

		leftArray.forEach(number => {
			leftArraySum += number;
		})

		rigthArray.forEach(number => {
			rigthArraySum += number;
		})

		while (leftArraySum === rigthArraySum) {
			return i;
		} 
	}
	return -1;
};

/*console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([20,10,30,10,10,15,35]));*/

//challenge 6: Ones and Zeros
const binaryArrayToNumber = arr => {
	var arrBinaryString = "";
	arr.forEach(number=> {
		number = number.toString();
		arrBinaryString += number;
	})
	return parseInt(arrBinaryString, 2);
};

/*console.log((binaryArrayToNumber([0,0,0,1])));
console.log((binaryArrayToNumber([0,0,1,0])));
console.log((binaryArrayToNumber([1,1,1,1])));
console.log((binaryArrayToNumber([0,1,1,0])));*/

//challenge 7: Highest and Lowest
function highAndLow(numbers) {
	var arrayNumbersString = numbers.split(" ");
	var arrayNumbers = []; 
	arrayNumbersString.forEach(element=> {
		arrayNumbers.push(parseInt(element));
		
	});

	return (Math.max.apply(null, arrayNumbers) + " " + Math.min.apply(null, arrayNumbers)).toString();
};

//console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

//challenge 8: Your order, please
function order(words) {
	var wordsArray = words.split(" ");
	console.log(wordsArray);
	var numbersArray = [];
	var sortWordsArray = [];
	var finalString;
	var regex = /(\d+)/g;
	wordsArray.forEach(element=> {
		regex = /(\d+)/g;
		numbersArray.push(element.match(regex));
	})

	for (i=1; i<=numbersArray.length; i++) {
		for (j=0; j<wordsArray.length; j++) {	
			if (wordsArray[j].match(regex) == i) {
				sortWordsArray.push(wordsArray[j]);
			}
		}
	}	 	

	numbersArray.sort();
	finalString = sortWordsArray.join(" ");
	return finalString;
};

/*console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));*/

//challenge 9: Number of People in the Bus
var number = function(busStops){
	var peopleGetIn = 0;
	var peopleGetOff = 0;
	for (i=0; i<busStops.length; i++) {
		peopleGetIn += busStops[i][0];
		peopleGetOff +=busStops[i][1];
	}
	return peopleGetIn - peopleGetOff;
};

/*console.log(number([[10,0],[3,5],[5,8]]));*/

//challenge 10: Is this a triangle?
function isTriangle(a,b,c)
{
	if (a+b > c && a+c > b && b+c > a) {
		return true;
	}
	return false;
};

/*console.log((isTriangle(1,2,2)));
console.log((isTriangle(7,2,2)));*/

//challenge 11: Moving Zeros To The End
var moveZeros = function (arr) {
	var removed = [];
	for (i=0; i<arr.length; i++) {
		if (arr[i] === 0) {
			removed.push(arr.splice(i, 1));
		}
	}
	for (i=0; i<arr.length; i++) {
		if (arr[i] === 0) {
			removed.push(arr.splice(i, 1));
		}
	}
	for (i=0; i<arr.length; i++) {
		if (arr[i] === 0) {
			removed.push(arr.splice(i, 1));
		}
	}
	for (j=0; j<removed.length; j++) {
		arr.push(0);
	}
	return arr;
};

/*console.log(JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])));
console.log(JSON.stringify(moveZeros([9, 0.0, 9, 1, 2, 1, 1, 0.0, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0])));
console.log(JSON.stringify(moveZeros([ 9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ])));
console.log(JSON.stringify(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])));*/

//challenge 12: Human Readable Time
function humanReadable(seconds) {
	var hours = (Math.floor(seconds/3600)).toString();
	var hoursDisplay;
	var minutes = (Math.floor((seconds%3600)/60)).toString();
	var minutesDisplay; 
	var secondsDisplay = (seconds%60).toString();

	if (hours.length == '2') {
		hoursDisplay = hours;
	} else {
		hoursDisplay = '0' + hours;
	}

	if (minutes.length == '2') {
		minutesDisplay = minutes;
	} else {
		minutesDisplay = '0' + minutes;
	}

	if (secondsDisplay.length == '2') {
		secondsDisplay = secondsDisplay;
	} else {
		secondsDisplay = '0' + secondsDisplay;
	}

	return (`${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`);
};

/*console.log(humanReadable(0));
console.log(humanReadable(5));
console.log(humanReadable(60));
console.log(humanReadable(86399));
console.log(humanReadable(359999));*/

//challenge 13: Take a Ten Minute Walk
function isValidWalk(walk) {
	var nArray = [];
	var sArray = [];
	var eArray = [];
	var wArray = [];

	for(var i = 0; i < walk.length; i++) {
		if (walk[i] === 'n') nArray.push(i);
	}
	for(var i = 0; i < walk.length; i++) {
		if (walk[i] === 's') sArray.push(i);
	}
	for(var i = 0; i < walk.length; i++) {
		if (walk[i] === 'e') eArray.push(i);
	}
	for(var i = 0; i < walk.length; i++) {
		if (walk[i] === 'w') wArray.push(i);
	}

	if (walk.length == 10 && nArray.length === sArray.length && eArray.length === wArray.length) {
		return true;
	} else {
		return false;
	}
};

/*console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));*/

//challenge 14: Hacer!
/*Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.*/
/*function findNb(m) {
    var n = 0;
    const total = m;
    m += (n)^3

    while (m = -18*n + n^3) {
    	console.log('hola');
    	//return n;
    } 
    	
    return (-1);
};

console.log(findNb(4183059834009));
console.log(findNb(24723578342962));
console.log(findNb(135440716410000));
console.log(findNb(40539911473216));

//Math.pow(numero, 1 / 3);



let str = '';
let num = 0;
let result = str || (num = 2);
console.log(result);*/

//challenge 15: Detect Pangram
function isPangram(string) {
	var letters="abcdefghijklmnopqrstuvwxyz";
	var lettersArray = [];
	var stringArray = [];
	string = string.toLowerCase();
	for(i=0; i<letters.length; i++) {
			lettersArray.push(letters.charAt(i));				
	}
	for(i=0; i<string.length; i++) {
		if (RegExp(/[a-z]/).test(string.charAt(i))) {
			stringArray.push(string.charAt(i));				
		}
	}

	for(i= stringArray.length-1; i >=0; i--) {
		if(stringArray.indexOf(stringArray[i]) !== i) stringArray.splice(i,1);
	}

	stringArray.sort();

	for (i=0; i<lettersArray.length; i++) {
		if (lettersArray[i] === stringArray[i] && lettersArray.length === stringArray.length) {
			return true;
		}		
	}
	return false;
};

/*console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));*/

//challenge 16: Build Tower
function towerBuilder(nFloors) {
	var floorsArray = [];
	for (i=1; i<=nFloors; i++) {
		floorsArray.push(' '.repeat(nFloors - i) + '*'.repeat((2*i) - 1) + ' '.repeat(nFloors - i));
	}
	return floorsArray;
};

/*console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));*/

//challenge 17: Simple Encryption #1 - Alternating Split/ Hacer!
/*function encrypt(text, n) {
	var newText = 'h';

	for (i=0; i<text.length; i++) {
		if (i % 2 != 0) {
			//console.log(text.substr(i,1));
			newText += text.charAt(i);
		}		
	}
	for (i=0; i<text.length; i++) {
		if (i % 2 === 0) {
			newText += text.charAt(i);
		}		
	}
	return newText;
	decrypt(newText, n);
}

function decrypt(encryptedText, n) {
	console.log(encryptedText);
	var normalText1 = '';
	var normalText2 = '';
	for (i=0; i<Math.ceil(encryptedText.length/2); i++) {
		normalText1 = encryptedText.substr(0, Math.ceil(encryptedText.length/2));
	}
	console.log(normalText1);
	for (i=0; i<normalText1.length; i += 2, j=Math.ceil(encryptedText.length/2); j<encryptedText.length; j++) {
			if (i + 2 < normalText1.length) {
				normalText2 += normalText1.substring(i, i+2) + encryptedText.slice(0 , Math.ceil(encryptedText.length/2)+j);
			}
	}	console.log(normalText2);
}

console.log(encrypt("This is a test!", 0));*/
/*console.log(encrypt("This is a test!", 1));
console.log(encrypt("This is a test!", 2));
console.log(encrypt("This is a test!", 3));
console.log(encrypt("This is a test!", 4));*/

/*for (let i = 0; i < longitudCadena; i += pasos) {
        if (i + pasos < longitudCadena) {
            cadenaConCaracteres += cadena.substring(i, i + pasos) + caracter;
        } else {
            cadenaConCaracteres += cadena.substring(i, longitudCadena);
        }
    }*/

//challenge 18: Calculating with Functions
function zero(operation) {
	if (operation == undefined) {
		return ' 0';
	} else {
		return  Math.floor(eval('0 ' + operation));
	}	
}
function one(operation) {
	if (operation == undefined) {
		return ' 1';
	} else {
		return Math.floor(eval('1 ' + operation));
	}
}
function two(operation) {
	if (operation == undefined) {
		return ' 2';
	} else {
		return Math.floor(eval('2 ' + operation));
	}
}
function three(operation) {
	if (operation == undefined) {
		return ' 3';
	} else {
		return Math.floor(eval('3 ' + operation));
	}	
}
function four(operation) {
	if (operation == undefined) {
		return ' 4';
	} else {
		return Math.floor(eval('4 ' + operation));
	}
}
function five(operation) {
	if (operation == undefined) {
		return ' 5';
	} else {
		return Math.floor(eval('5 ' + operation));
	}
}
function six(operation) {
	if (operation == undefined) {
		return ' 6';
	} else {
		return Math.floor(eval('6 ' + operation));
	}
}
function seven(operation) {
	if (operation == undefined) {
		return ' 7';
	} else {
		return Math.floor(eval('7 ' + operation));
	}	
}
function eight(operation) {
	if (operation == undefined) {
		return ' 8';
	} else {
		return Math.floor(eval('8 ' + operation));
	}
}
function nine(operation) {
	if (operation == undefined) {
		return ' 9';
	} else {
		return Math.floor(eval('9 ' + operation));
	}
}

function plus(number) {
	return '+' + number;
}

function minus(number) {
	return '-' + number;
}

function times(number) {
	return '*' + number;
}

function dividedBy(number) {
	return  '/' + number;
};

/*console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(three(plus(two())));*/