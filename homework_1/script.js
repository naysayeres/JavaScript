//task_1

let a = 10*100;
let b = 15*25;
let result = a % b;
console.log (result +" м.кв.");

//task_2

let a1 = 15*100;
let b1 = 600;
let result1 = a1 - b1;
console.log (result1 + " см.кв.");

//task_3

var a2 = Math.min (51515,8616531,342,777777);
console.log (a2 + " -меньшее число.");

//task_4

let res;
let a3 = -19;
let b3 = 20;
const ten=10;

res = (Math.abs(ten-a3) < Math.abs(ten-b3)) ? a3 : b3;
console.log(res);

//task_5
let Ax=+prompt("A:X"),
	Ay=+prompt("A:Y"),
	Az=+prompt("A:Z");
let Bx=+prompt("B:X"),
	By=+prompt("B:Y"),
	Bz=+prompt("B:Z");
let Cx=+prompt("C:X"),
    Cy=+prompt("C:Z"),
    Cz=+prompt("C:Y");

let AB=(Ax-Bx)**2+(Ay-By)**2+(Az-Bz)**2,
	BC=(Bx-Cx)**2+(By-Cy)**2+(Bz-Cz)**2,
	CA=(Cx-Ax)**2+(Cy-Ay)**2+(Cz-Az)**2;

 let result3=(AB==BC+CA) ? 'ALL OKAY':
			 (BC==AB+CA) ? 'ALL OAKY':
			 (CA==BC+AB) ? 'ALL OKAY':
			  'NOT OKAY';

   console.log(result3);