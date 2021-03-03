var a = 1;
console.log(a + 3);
a=2;
console.log(a);
// 1 = 2; 주석(comment) 코딩할 때 이건 읽지 않아요.


var name = 'k8805';
var letter = 'Dear '+name+'\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+name+' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum. '+name;
console.log(letter);
// Template Literal = 리터럴은 데이터 정보를 표현하는 기호
// Grave Accent (`) 숫자 1 옆에 물결표시
// /n = 띄어쓰기  >>>> 레터럴을 사용하여 엔터로 변환 가능

var letter = `Dear ${name}

Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa egoing qui officia deserunt mollit anim id est laborum. ${name}`;

console.log(letter);