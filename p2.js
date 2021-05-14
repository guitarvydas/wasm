async function myFunction() {
    var promis = new Promise (function (happyfunc, unhappyfunc) {
	happyfunc ("happy");
    });
    var resolved = await promis;
    return resolved
}

var p = await myFunction ();
p.then(
    function(v) {
	console.log ("happy: " + v);
    },
    function(e) { 
	console.log ("unhappy: " + e);
    }
);
