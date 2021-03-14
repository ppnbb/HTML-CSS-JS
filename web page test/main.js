var http = require('http');
var fs = require('fs');
var url = require('url');

function templeateHTML(title, list, body){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web page test - ${title}</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .ht{
            font-size: 25px;
            color: coral;
        }
        #ml{
            color: cornflowerblue;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="colors.js"></script>
</head>
<body>
    <h1><a href="/">Web-1</a></h1>
    <div id="grid">
    ${list}
    <div id="article">
    ${body}
    </div>
    </div>
    <input type="button" value="night" onclick="nightDayHandler(this);">
    <p>
        <!--Start of Tawk.to Script-->
<script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5fb7536ba1d54c18d8eb808b/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    </script>
    <!--End of Tawk.to Script-->
    </p>
</body>
</html>
    `;
}
function templateList(filelist){
    var list ='<ul>';               
    var i = 0;
    while(i < filelist.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</li>`;
        i = i + 1;
    }
    list = list+'</ul>';
    return list;
}


var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
        if(queryData.id === undefined){
            
            fs.readdir('../data', function(error, filelist){
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var list = templateList(filelist);
                var template = templeateHTML(title, list, `<h2>${title}</h2>${description}`);
                response.writeHead(200);
                response.end(template);
            })
        } else {
            fs.readdir('../data', function(error, filelist){
             
                fs.readFile(`../data/${queryData.id}`,'utf8', function(err, data){
                    var title = queryData.id;
                    var description = data;
                    var list = templateList(filelist);
                    var template = templeateHTML(title, list, `<h2>${title}</h2>${description}`);
                response.writeHead(200);
                response.end(template);
            });
        });
        }
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
    //기계와 기계가 통신할 때 필요한 약속
    //200 이라는 숫자를 서버에 주는 것은 파일을 성공적으로 교신
    //파일을 찾을 수 없는 경우 404라는 번호를 부여 > Not found
   
    
});
app.listen(3000);