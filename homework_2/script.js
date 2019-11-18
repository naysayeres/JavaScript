//task_1

var season = +prompt("Введите номер месяца");
	switch (season) {
		case 1: case 2: case 12: 
			console.log("Зимний месяц");
			alert ("Зимний месяц");
			break;
		case 3: case 4: case 5: 
			console.log("Весенний месяц");
			alert ("Весенний месяц");
			break;
		case 6: case 7: case 8: 
			console.log("Летний месяц");
			alert ("Летний месяц");
			break;
		case 9: case 10: case 11: 
			console.log("Осенний месяц");
			alert ("Осенний месяц");
			break;
		default: 
			console.log("Такого месяца нет");
			alert ("Такого месяца нет!");
	}
	
//task_2
var ez = +prompt("Введите используемую еденицу измерений (1-дм,2-км,3-м,4-мм,5-см)");
if (ez>0 && ez<=5) {
var l = +prompt("Введите значение длинны отрезка");
let x =0;
	switch (ez) {
		case 1:
			x = (l*0.1);
			console.log("Длинна отрезка = "+x+" м");
			alert ("Длинна отрезка = "+x+" м");
			break;
		case 2:
			x = (l*1000);
			console.log("Длинна отрезка = "+x+" м");
			alert ("Длинна отрезка = "+x+" м");
			break;
		case 3:
			x = i;
			console.log("Длинна отрезка = "+x+" м");
			alert ("Длинна отрезка = "+x+" м");
			break;
		case 4:
			x = (l*0.001);
			console.log("Длинна отрезка = "+x+" м");
			alert ("Длинна отрезка = "+x+" м");
			break;
		case 5:
			x = (l*0.01);
			console.log("Длинна отрезка = "+x+" м");
			alert ("Длинна отрезка = "+x+" м");
			break;
    }
}	
else {
	alert ("Такой еденицы измерения нет.");
}

//task3
var chislo = +prompt("Введите целое число от -999 до 999");
if 	(chislo > 0) {
	if (chislo <10) {
		alert (chislo+" - положительное однозначное");
	}	else if (chislo < 100 && chislo >= 10 ) {
			alert (chislo+" - положительное двузначное");
	}	else if (chislo >=100 && chislo <= 999 ) {
			alert (chislo+" - положительное трехзначное");
	} 
}else if (chislo < 0) {
	if (chislo > -10) {
		alert (chislo+" - отрицательное однозначное");
	}	else if (chislo > -100 && chislo <= -10 ) {
			alert (chislo+" - отрицательное двузначное");
	}	else if (chislo <=-100 && chislo >= -999 ) {
			alert (chislo+" - отрицательное трехзначное");
	} 
}else if (chislo == 0) {
	alert (chislo+" - ноль");
}else{
	alert ("число"+chislo+" не попадает в заданный диапазон.");
}

//task4
for (let i = 1; i <= 100; i++) {
	if (i%3==0 && i%5!=0) {
		console.log("Three");
	} else if (i%5==0 && i%3!=0) {
		console.log("Five");
	} else if (i%5==0 && i%3==0) {
	console.log("ThreeFive");
	} else {
		console.log(i);
    }
}