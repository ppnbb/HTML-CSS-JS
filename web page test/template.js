module.exports = {
    HTML:function(title, list, body, control){
        return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>WEB2 - ${title}</title>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1><a href="/">Web</a></h1>
            ${list}
            ${control}
            ${body}
            </body>
            </html>
        `;
    }, list:function(filelist){
        var list ='<ul>';               
        var i = 0;
        while(i < filelist.length){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</li>`;
            i = i + 1;
        }
        list = list+'</ul>';
        return list;
    }
}