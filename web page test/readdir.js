var testFolder = '../data'; // ./data = data >> 현재 디렉토리에 있는 데이터(동일한 의미)
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){//err, filelist는 변수의 이름
  console.log(filelist);
})