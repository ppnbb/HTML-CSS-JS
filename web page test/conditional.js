var args = process.argv;
console.log(args[2]);
console.log('A');
console.log('B');
if(args[1] === '1'){
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');

//conditional = 조건문
//Input(Parameter-입력되는 정보의 형식, Argument-형식에 맞게 실제로 입력한 값)
//Input, Output을 줄여서 'IO' 라고도 함.

//nodejs console input parameters 검색
//Standard method
//var args = process.argv;
