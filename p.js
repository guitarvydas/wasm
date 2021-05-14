let myPromise = new Promise(function(hole1, hole2) {
  setTimeout(function() { hole1("I love You !!"); }, 1000);
});

myPromise.then(function(value) {
    console.log ("test A: " + value);
});


var fs = require ('fs');

let myPromise2 = new Promise(function(hole1, hole2) {
    //let f = new File (fileparts, "testfile.txt", { type: 'plain/text' });
    let reader = new FileReader ();
    reader.onload = function (ret) {
	hole1 (ret.result);
    };
    reader.onerror = function (ret) {
	hole2 (ret);
    };
    reader.onabort = function (ret) {
	hole2 (ret);
    };
    reader.readAsText(fileparts);
});


myPromise2.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

function myDisplayer (text) {
    console.log ("display: " + text);
}
