var fs = require ('fs');

async function getws () {
    try {
	var w = fs.readFileSync('test.wasm');
	console.log ("read OK");
	console.log (encodeURI (w));
    } catch (e) {
	console.log ("error: " + e);
    }
    
    var res = await WebAssembly.instantiate(w)
	.then (r => {
	    // console.log ("r: ");
	    // console.log (r);
	    // console.log (r.instance);
	    // console.log (r.instance.exports);
	    // console.log (r.instance.exports.add);
	    // for (i in r.instance.exports) {
	    // 	console.log ("i: " + i.toString ());
	    // };
	    // console.log (r.instance.exports.add(1,2));
	    // console.log (r.module);
	    return r;
	});
    // console.log ("res: ");
    // console.log (res);
    // console.log (res.instance);
    // console.log (res.instance.exports);
    // console.log (res.instance.exports.add);
    // for (i in res.instance.exports) {
    // 	console.log ("i: " + i.toString ());
    // };
    // console.log (res.instance.exports.add(1,2));
    // console.log (res.module);
    // console.log (res);
    return res;
    // return await WebAssembly.instantiate(new Uint8Array(w));
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
