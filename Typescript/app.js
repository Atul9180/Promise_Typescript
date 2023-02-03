//1. no without typescript same as js:
function add(num1, num2) {
    return num1 + num2;
}
console.log("🚀 ~ file: app.ts:4 ~ NO Type Add ~ ̥", add(1, 4));
console.log("🚀 ~ file: app.ts:5 ~ NO Type Add ~ ̥", add('1', '4'));
//2. Using typescript i.e assigning types [error in console for line 14]:
function adding(num3, num4) {
    return num3 + num4;
}
console.log("🚀 ~ file: app.ts:4 ~ Num Type adding(1,4) ~ ̥", adding(1, 4));
console.log("🚀  ~ file: app.ts:5 ~ Num Type adding('1','4') ~ ̥", adding('1', '4'));
//3 Using form of html:
var num1Ele = document.getElementById('n1');
var num2Ele = document.getElementById('n2');
var btnadd = document.querySelector('button');
function addthem(n1, n2) {
    return n1 + n2;
}
btnadd.addEventListener('click', function () {
    var n1 = num1Ele.value;
    var n2 = num2Ele.value;
    var result = addthem(n1, n2);
    console.log(result);
});
