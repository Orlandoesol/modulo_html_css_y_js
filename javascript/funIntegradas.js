//string
let num = 123;
let str = String(num); // "123"
console.log(str);

//number
let strNum = "456";
let numFromStr = Number(strNum); // 456
console.log(strNum);
console.log(numFromStr);

//boolean
let bool = true;
let strBool = String(bool); // "true"
console.log(strBool);

//array
let arr = [1, 2, 3];    
let strArr = String(arr); // "1,2,3"
console.log(arr);
console.log(strArr);

//object
let obj = {a: 1, b: 2};
let strObj = String(obj);

// "[object Object]"
console.log(obj);
console.log(strObj);

let n = null;
let strN = String(n); // "null"
console.log(n);
console.log(strN);