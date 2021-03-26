var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('../lib/template.js');
var path = require('path');
//refactoring > 처음부터 함수를 사용하여 코드를 작성하는 것은 어렵기 때문에 코드 작성 후 유지보수가 쉽도록 정리정돈 > 함수, 배열, 객체화

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
        if(queryData.id === undefined){
            fs.readdir('../data', function(error, filelist){
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var list = template.list(filelist);
                var html = template.HTML(title, list,
                    `<h2>${title}</h2>${description}`,
                    `<a href="/create">create</a>` //Home 화면에서는 create 버튼만 생성
                );
                response.writeHead(200);
                response.end(html);
            });
        } else {
            fs.readdir('../data', function(error, filelist){
                var filteredId = path.parse(queryData.id).base;
                var filteredId = path.parse(queryData.id).base;
                fs.readFile(`../data/${filteredId}`,'utf8', function(err, data){
                    var title = queryData.id;
                    var description = data;
                    var list = template.list(filelist);
                    var html = template.HTML(title, list,
                        `<h2>${title}</h2>${description}`,
                        ` <a href="/create">create</a>
                          <a href="/update?id=${title}">update</a>
                          <form action="delete_process" method="post">
                            <input type="hidden" name="id" value="${title}">
                            <input type="submit" value="delete">
                          </form>` //홈페이지 외 다른 페이지에서는 수정 버튼 생성, 주소(?id=)는 각 페이지 타이틀 사용
                        );
                response.writeHead(200);
                response.end(html);
            });
        });
        }
    } else if(pathname === '/create'){
        fs.readdir('../data', function(error, filelist){
            var title = 'Web - create';
            var list = template.list(filelist);
            var html = template.HTML(title, list, `
                <form action="/create_process" method="post">
                    <p><input type="text" name="title" placeholder="title"></p>
                    <p>
                        <textarea name="description" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
             `, '');
            response.writeHead(200);
            response.end(html);
        });
    }else if(pathname === '/create_process'){
        var body = '';
        request.on('data', function(data){ 
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`../data/${title}`, description, 'utf8', function(err){ //파일 생성 기능
                response.writeHead(302, {Location: `/?id=${title}`}); //200 = 성공, 302 = Redirection 다른 페이지로
                response.end();   
            })
        });
        
    }else if(pathname === '/update'){
        fs.readdir('../data', function(error, filelist){
            var filteredId = path.parse(queryData.id).base;
            fs.readFile(`../data/${filteredId}`,'utf8', function(err, data){
                var title = queryData.id;
                var description = data;
                var list = template.list(filelist);
                var html = template.HTML(title, list,
                    `
                    <form action="/update_process" method="post">
                    <input type="hidden" name="id" value="${title}">
                    <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                    <p>
                        <textarea name="description" placeholder="description">${description}</textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
                    `,
                    `<a href="/create">create</a> <a href="/update?id=${title}">update</a>` //홈페이지 외 다른 페이지에서는 수정 버튼 생성, 주소(?id=)는 각 페이지 타이틀 사용
                    );
            response.writeHead(200);
            response.end(html);
        });
    });   
    }else if(pathname === '/update_process'){
        var body = '';
        request.on('data', function(data){ 
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;
            fs.rename(`../data/${id}`, `../data/${title}`, function(error){
                fs.writeFile(`../data/${title}`, description, 'utf8', function(err){ //파일 생성 기능
                    response.writeHead(302, {Location: `/?id=${title}`}); //200 = 성공, 302 = Redirection 다른 페이지로
                    response.end();   
                })
            })
        });
    }else if(pathname === '/delete_process'){
        var body = '';
        request.on('data', function(data){ 
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var id = post.id;
            var filteredId = path.parse(id).base;
            fs.unlink(`../data/${filteredId}`, function(error){
                response.writeHead(302, {Location: `/`})
                response.end();
            })

        });
        
    }else{
        response.writeHead(404);
        response.end('Not found');
    }
    //기계와 기계가 통신할 때 필요한 약속
    //200 이라는 숫자를 서버에 주는 것은 파일을 성공적으로 교신
    //파일을 찾을 수 없는 경우 404라는 번호를 부여 > Not found
   
    
});
app.listen(3000);