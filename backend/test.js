const { isBefore,format} = require("date-fns");
const { addDays,addMinutes } = require("date-fns");

let today =new Date()
console.log(today);
let x = format(today,"dd/MM/yyyy")
let y = format(today,"dd/LLL/yyyy")
let fd = addDays(today,2)
let z = format(today,"dd/MM/yy/h:m:s:aa")
let futureTime = addMinutes(new Date(),5)
console.log(format(fd,"dd/MM/Y"));
console.log(x);
console.log(y);
console.log(z);
console.log(format(futureTime, "dd/MM/yy/h:m:s:aa"));
