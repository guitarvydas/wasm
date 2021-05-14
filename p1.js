async function myFunction() {
  return "Hello";
}

var p = myFunction ();
p.then(
    function(v) {
	console.log ("happy: " + v);
    },
    function(e) { 
	console.log ("unhappy: " + e);
    }
);
