/*
Object Oriented Programming
자바스크립트에서 함수는 구문(Statement)과 값(Value)
서로 연관된 데이터(변수)와 처리(함수)를 그룹화 하여 정리 정돈 가능 > 소프트웨어 복잡도 낮아짐
*/

var f = function (){
    console.log(1+1);
    console.log(1+2);
}//function은 처리 방법을 담고 있는 구문이면서, 값이 될 수 있음
var a = [f];
a[0]();

var o = {
    func:f //객체에 함수를 담는 경우가 많음
}
o.func();

//var i = if(true){console.log(1)};
//while(true){console.log(1)}; var와 while은 값이 되 수 없음.