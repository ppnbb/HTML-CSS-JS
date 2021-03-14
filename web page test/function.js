f123();
console.log('A');
console.log('Z');
console.log('B');
f123();
console.log('F');
console.log('C');
console.log('P');
console.log('J');
f123();
console.log('U');
console.log('A');
console.log('Z');
console.log('J');
console.log('I');
f123();

function f123(){
    console.log(1);
    console.log(2);
    console.log(3);
}

console.log(Math.round(1.6));  //2(round = 반올림)
console.log(Math.round(1.4));  //1(math.round()를 출력하기 위해 console.log가 필요 but 파일 내, 이메일 등 다양한 곳으로 출력 가능)

function sum(first, second){ //parameter = 매개 변수(각각의 입력값(argument)을 받아 함수 안으로 전달하는 매개체)
   return first+second; //return 뒤에 붙어있는 값을 출력 > return 사용 시 math와 같이 다양하게 출력 가능(함수의 값을 출력 및 함수 종료 2가지 의미를 가짐)
}
 console.log(sum(2,4)); //2와 4는 argument = 각각의 입력값(인자), 항상 console.log를 통하여 출력

