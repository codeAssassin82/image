'use strict';
var http = require('http');
var md5 = require('md5');
var moment = require('moment');

var server = http.createServer(function(req, res) {
  console.log('hello');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
	var urlParts = req.url.match(/[^/]+/g);
	if(urlParts) {
		var path = urlParts.shift();
		switch(path){
			case 'gravatar':
  			var data = {};
  			var email = urlParts[0];
  			var hashed = md5(email);
  			data.url = `http://2.gravatar.com/avatar/${hashed}`;
  			res.write(JSON.stringify(data));
  			break;

			case 'square':
			  var num = parseInt(urlParts[0]);
			  var square = Math.pow(num, 2);
			  res.write(square);
			  break;
			case 'first':
		   var sum = urlParts.reduce(function(sum, num){
			return sum + parseInt(num);
		},0);
		res.write(sum.toString());
		break;
		case 'sentence':
			var obj = {};
			var letterMatch = sentence.match(/[a-z]/ig) || [];
			obj.letterCount = letterMatch.length;
			obj.wordCount = sentence.split(' ').length;
			obj.avgWordCount = obj.letterCount / obj.wordCount;
			var str = JSON.stringify(obj);
			res.write(str);
		}
	};

	res.write('\n')
	res.end()
});
server.listen(3000);
