//1. no without typescript same as js:
function add(num1,num2){
    return num1+num2;
}
    console.log("🚀 ~ file: app.ts:4 ~ NO Type Add ~ ̥",add(1,4) );
    console.log("🚀 ~ file: app.ts:5 ~ NO Type Add ~ ̥",add('1','4') );


//2. Using typescript i.e assigning types [error in console for line 14]:
function adding(num3:number,num4:number){
    return num3+num4;
}
    console.log("🚀 ~ file: app.ts:4 ~ Num Type adding(1,4) ~ ̥",adding(1,4) );
    console.log("🚀  ~ file: app.ts:5 ~ Num Type adding('1','4') ~ ̥",adding('1','4') );

//3 Using form of html:
const num1Ele = document.getElementById('n1') as HTMLInputElement;
const num2Ele = document.getElementById('n2') as HTMLInputElement;
const btnadd = document.querySelector('button')!;

function addthem(n1:number,n2:number){
    return n1+n2;
}
//  btnadd.addEventListener('click',()=>{
//     const n1 = num1Ele.value;
//     const n2 = num2Ele.value;
//     const result = addthem(n1,n2);
//     console.log(result)
//  })

 //4 object and array:
 function printResult(resutlObj: {val:number; timestamp:Date}){
    console.log(resutlObj.val)
 }
 btnadd.addEventListener('click',()=>{
    const n1 = num1Ele.value;
    const n2 = num2Ele.value;
    const result = addthem(+n1,+n2);
    const stringResult = addthem(n1,n2);
    console.log(result)
    console.log(stringResult)
    printResult({val:result as number,timestamp: new Date()})

 })


