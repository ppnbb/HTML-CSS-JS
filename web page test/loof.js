var arr = ['A', 'B', 'C', 'D'];
console.log(arr[1]);
console.log(arr[3]);
arr[2] = 3; //배열 내 데이터 변경 시 사용
console.log(arr);
console.log(arr.length);
arr.push('E'); //배열 끝자리에 데이터 추가할 시 사용
console.log(arr);

console.log('A');
console.log('B');
var i = 0;
while(i < 2){
    console.log('C1');
    console.log('C2');
    i = i + 1;
}

console.log('D');

//반복문에는 for, forEach, do while, while 등이 있다.
//while은 자율성이 높아 편리하다.
//배열(Array) 서로 연관된 데이터를 정리정돈하는 도구
//배열은 [] 대괄호를 사용하며 ,(콤마)를 사용하여 구분한다.
//자리 수 = 첫번째 자리 0 부터 시작
//갯수 = 1 부터 시작