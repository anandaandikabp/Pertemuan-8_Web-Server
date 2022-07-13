const fs = require('fs');
const http = require('http');
const port = 3000;

const halHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('file not found');
        } else {
            res.write(data);
        }
        res.end();
    })
}

http
    .createServer((req, res) => {
    const url = req.url;
    console.log(url);
    // res.writeHead(200, {
    //     'Content-Type' : 'text/html',
    // });   

    if (url === '/about') {
        halHTML('./about.html', res);
    } else if (url === '/contact') {
        halHTML('./contact.html', res);
    } else {
        halHTML('./index.html', res);
    }    
    })
    .listen(port, () => {
        console.log(`server is listening port ${port}`);
    });
