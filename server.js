'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
	console.log(request.method, request.url);
	if(request.url == '/style.css') {
		const style = fs.readFileSync('style.css', 'utf8');
		response.end(style);
	} else {
		const text = fs.readFileSync('index.html', 'utf8');
		response.end(text);
	}
});

server.listen(3000);
console.log('Server started!');