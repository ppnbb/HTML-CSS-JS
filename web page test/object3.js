var q = {
    v1:'v1',
    v2:'v2',
    f1:function(){
        console.log(this.v1);
    },
    f2:function(){
        console.log(this.v2);
    }
} //객체에 함수를 담는 것은 하드디스크에 폴더를 만들어 정리정돈 하는 것과 같음

q.f1();
q.f2();