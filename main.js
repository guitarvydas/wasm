var fs = require ('fs');

async function getws () {
    var w;
    try {
	w = fs.readFileSync('test.wasm');
    } catch (e) {
	console.log ("error: " + e);
    }
    return await WebAssembly.instantiate(w)
}

var w = getws ();
w.then (function (value) {
    console.log ("value: ");
    console.log (value);
    
    for (i in value) {
	console.log (i);
    }
    
    console.log (value.instance.exports.add(2,3));

});
