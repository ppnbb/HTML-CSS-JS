//Object(객체) 와 Array(배열)
//배열은 객체와 함께 정보를 정리정돈하는데 사용 > 각각의 정보를 순서에 따라 정리 > 숫자 배정
//객체는 순서가 없는 정보 정리 > 이름 배정

var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]); //대괄호에서는 똑같이 대괄호 사용
var i = 0;
while(i < members.length){
    console.log('array loop', members[i]);
    i = i + 1;
}

var roles = {
    'programmer' : 'egoing', //programmer 자리는 key
    'designer' : 'k8805',    //egoing 자리는 value
    'manager' : 'hoya'
}

console.log(roles.designer); //중괄호에서는 . 사용
console.log(roles['designer']); //대괄호를 사용하여 value 값 추출 가능
for(var name in roles){
    console.log('object => ', name, 'value => ', roles[name]);
}
//name의 변수는 객체의 식별자(key) 값이 들어오도록 설정되어 있음 > name의 이름은 변경 가능
//value를 얻기 위해서는 roles[name]으로 기재 > key에 해당하는 정보를 가져옴