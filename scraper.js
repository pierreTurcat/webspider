
'use strict';

/**
 * Web Scraper
 */
// Instead of the default console.log, you could use your own augmented console.log !
// var console = require('./console');
//It permit to check if this is the first Link :
var checkIfFirstLink = true;

var scrapeCount = 0;
// Url regexp from http://daringfireball.net/2010/07/improved_regex_for_matching_urls
var EXTRACT_URL_REG = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
var PORT            = 3000;

var request         = require('request');

// See: http://expressjs.com/guide.html
var express         = require('express');
var app             = express();

// You should (okay: could) use your OWN implementation here!
var EventEmitter    = require('events').EventEmitter;

// We create a global EventEmitter (Mediator pattern: http://en.wikipedia.org/wiki/Mediator_pattern )
var em              = new EventEmitter();

/**
 * Remainder:
 * queue.push("http://..."); // add an element at the end of the queue
 * queue.shift(); // remove and get the first element of the queue (return `undefined` if the queue is empty)
 *
 * // It may be a good idea to encapsulate queue inside its own class/module and require it with:
 * var queue = require('./queue');
 */
var queue        = [];

/**
 * Get the page from `page_url`
 * @param  {String} page_url String page url to get
 *
 * `get_page` will emit
 */

/**
*
*var which permit to save all the link you've got in the function handle_new_url
**/
var urlSaved = "";


// Website URL we will scrape.
var websiteToSearch = "";

var urlCount = 0;

// I found this on http://nodejs.org/api/readline.html and I change it to make it works as I want.

/**
*
*
*Ask the user on which URL he wants to scrape then It search the one you wrote.
*
**/

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var UrlScraped = [];

rl.question("Which URL do you want to scrape ? ", function(answer) {

	websiteToSearch = answer;
  
function get_page(page_url){
  em.emit('page:scraping', page_url);
0
  // See: https://github.com/mikeal/request
  request({
    url:page_url,
  }, function(error, http_client_response, html_str){
    /**
     * The callback argument gets 3 arguments.
     * The first is an error when applicable (usually from the http.Client option not the http.ClientRequest object).
     * The second is an http.ClientResponse object.
     * The third is the response body String or Buffer.
     */

    /**
     * You may improve what get_page is returning by:
     * - emitting HTTP headers information like:
     *  -> page size
     *  -> language/server behind the web page (php ? apache ? nginx ? using X-Powered-By)
     *  -> was compression active ? (Content-Encoding: gzip ?)
     *  -> the Content-Type
     */

    if(error){
      em.emit('page:error', page_url, error);
      return;
    }

    em.emit('page', page_url, html_str);
    
  });
}

/**
 * Extract links from the web pagr
 * @param  {String} html_str String that represents the HTML page
 *
 * `extract_links` should emit an `link(` event each
 */
function extract_links(page_url, html_str){
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
  // "match" can return "null" instead of an array of url
  // So here I do "(match() || []) in order to always work on an array (and yes, that's another pattern).
  (html_str.match(EXTRACT_URL_REG) || []).forEach(function(url){
    // see: http://nodejs.org/api/all.html#all_emitter_emit_event_arg1_arg2
    // Here you could improve the code in order to:
    // - check if we already crawled this url
    // - ...
    em.emit('url', page_url, html_str, url);
  });

var pageScraper  = {url: page_url, contenu: html_str};
UrlScraped.push(pageScraper);
var countUrlSaved = 0;
// ici on scrap tout les liens trouvés

// if you want to see my "interface" you just got to delete all of the queue.forEach(...) and all it's inside.
queue.forEach(function (val) {
if (UrlScraped.indexOf(val) === -1) { 
  scrapeCount = scrapeCount + 1;
get_page(val);  

if (countUrlSaved > 50)
{
  return false;
}
var fs = require('fs');

fs.writeFile("UrlSaved/" + countUrlSaved + ".txt", UrlScraped[countUrlSaved], function(err) {
    if(err) {
        console.log(err);
    }
});

 }

})


}

function handle_new_url(from_page_url, from_page_str, url){
  // Add the url to the queue
  urlCount += 1;

  queue.push(url);

// I inspire me of an example for this here ==> http://stackoverflow.com/questions/2496710/writing-files-in-nodejs
// This saved the url in savedURL.txt
var fs = require('fs');
urlSaved = urlSaved + "\n" + url;
if (data != urlSaved){
fs.writeFile("UrlSaved/"+urlCount+".txt", urlSaved, function(err) {
   if(err) {
        console.log(err);
    }else{

              //console.log("The file was saved!");
    }
})};



  // ... and may be do other things like saving it to a database
  // in order to then provide a Web UI to request the data (or monitoring the scraper maybe ?)
  // You'll want to use `express` to do so 
}





em.on('page:scraping', function(page_url){
  console.log('Loading... ', page_url);
});

// Listen to events, see: http://nodejs.org/api/all.html#all_emitter_on_event_listener
em.on('page', function(page_url, html_str){
  console.log('We got a new page!', page_url);
  console.log(html_str);

});

em.on('page:error', function(page_url, error){
  console.error('Oops an error occured on', page_url, ' : ', error);
});

em.on('page', extract_links);

em.on('url', function(page_url, html_str, url){
  console.log('We got a link! ', url);


  if (checkIfFirstLink == true){

    var fs = require('fs');

  // I tried to get the htmlString of the

fs.writeFile("views/" + "htmlString.html" , html_str, function(err) {
    if(err) {
        console.log(err);
    }

});

checkIfFirstLink = false;
}
});

em.on('url', handle_new_url);


// A simple (non-REST) API
// You may (should) want to improve it in order to provide a real-GUI for:
// - adding/removing urls to scrape
// - monitoring the crawler state
// - providing statistics like
//    - a word-cloud of the 100 most used word on the web
//    - the top 100 domain name your crawler has see
//    - the average number of link by page on the web
//    - the most used top-level-domain (TLD: http://en.wikipedia.org/wiki/Top-level_domain )
//    - ...

// You should extract all the following "api" related code into its own NodeJS module and require it with
// var api = require('./api');
// api.listen(PORT);

app.get('/', function(req, res){
  // See: http://expressjs.com/api.html#res.json
  res.json(200, {
    title:'YOHMC - Your Own Home Made Crawler',
    endpoints:[{
      url:'http://127.0.0.1:'+PORT+'/queue/size',
      details:'the current crawler queue size'
    }, {
      url:'http://127.0.0.1:'+PORT+'/queue/add?url=http%3A//voila.fr',
      details:'immediately start a `get_page` on voila.fr.'
    }, {
      url:'http://127.0.0.1:'+PORT+'/queue/list',
      details:'the current crawler queue list.'
    }]
  });
});

app.get('/queue/size', function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.json(200, {queue:{length:queue.length}});
});

app.get('/queue/add', function(req, res){
  var url = req.param('url');
  get_page(url);
  res.json(200, {
    queue:{
      added:url,
      length:queue.length,
    }
  });
});

app.get('/queue/list', function(req, res){
  res.json(200, {
    queue:{
      length:queue.length,
      urls:queue
    }
  });
});




var fs = require('fs');

var pageHtml = "<html>  <head></head>  <body>    <input type='text' />    <input type = 'submit' />On which site do you want to go ?";


fs.readdir("views",function(error,directoryObject)
{
for( var i in directoryObject){
console.log(directoryObject[i]);
pageHtml =pageHtml + "<A href = '/home/"+ directoryObject[i] + "'> "+ directoryObject[i] + " </a>";
console.log(pageHtml);
}
fs.writeFile("/home/pierre/Desktop/Javascript/webspider/views/tryInterface.html", pageHtml, function(err) {
  if(err) {
        console.log(err);
    }else{

              //console.log("The file was saved!");
    }

});
});

console.log("wassup");




console.log("wassup");
urlSaved = urlSaved;
if (data != urlSaved){
fs.writeFile("UrlSaved/tryInterface.html", pageHtml, function(err) {
    if(err) {
        console.log(err);
    }else{

              //console.log("The file was saved!");
    }
})};





app.get('/home', function(req, res){
  // envoyer le code HTML directement

 
//list all the file in a directory, found there ==> http://webparaiso.free.fr/blog/?p=180

  var fs = require("fs");


fs.readdir("views",function(error,directoryObject)
{
for( var i in directoryObject){
console.log(directoryObject[i]);
}
});
res.send(require('fs').readFileSync('/home/pierre/Desktop/Javascript/webspider/views/htmlString.html').toString());



});

 app.use('/public'
, express.static(__dirname + '/public'));





app.listen(PORT);

console.log('Web UI Listening on port '+PORT);

// #debug Start the crawler with a link
get_page(websiteToSearch);



var fs = require('fs');
var data = "";

// useless function that I tried to read all the link, but I don't go as far as I want ( Ok I go no where with my interface)
// but it should have permit me to stocked and read all the links I got in my .txt files.

function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');

data = data;
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}

function func(data) {
  //console.log('Line: ' + data);
}


  rl.close();
});