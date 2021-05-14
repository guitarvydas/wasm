// npm i node-fetch --save
// npm install webassembly

//https://thecodebarbarian.com/getting-started-with-webassembly-in-node.js.html

const fetch = require('node-fetch');
const fs = require('fs');

const buf = fs.readFileSync('./test.wasm');

async function fn () {
	await WebAssembly.instantiate(new Uint8Array(buf))
	.then (r => console.log ({ value: 42, exp: r.instance.exports, ret: r }));
}

async function fn2 () {
	await WebAssembly.instantiate(new Uint8Array(buf))
	.then (() => 43);
    
    return 44;
//	.then (r => console.log ({ value: 42, exp: r.instance.exports, ret: r }));
}

async function fn3 () {
	await WebAssembly.instantiate(new Uint8Array(buf))
	.then (r => r.instance.exports);
}

function fn4() {
    var p =  new Promise (
	function (myResolve, myReject) {
	(r) => { return setTimeout (() => 18, 200) },
	(e) -> { return e; }
    );
    await p.then ((r) => { 
	console.log (r);
	return 19;
    });
}

const p = fn4 ();
console.log (p);

//	then(res => res.instance.exports);

//const lib = fn ();

//console.log(lib.add(2, 2));
//console.log(lib.addTwo.toString()); // Prints 'function addTwo() { [native code] }'
