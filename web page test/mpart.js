var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

module.exports = M;
//우리가 만들고 있는 mpart.js에서 M이 가지고 있는 객체를 이 모듈 밖에서
//사용할 수 있도록 하겠다.