var cameOnline = false;
var starttime;
var endtime;

setInterval(function() {
	try {
		var dt = new Date();
		var time = dt.toLocaleTimeString() + ', ' + dt.toLocaleDateString();
		var name = document.querySelector("#main > header > div._5SiUq > div._16vzP > div > span").innerText;
		var status = document.querySelector("#main > header > div._5SiUq > div._3sgkv.Gd51Q > span");

		if ((status===null) && (cameOnline===true)){
			cameOnline = false;
			endtime = new Date().getTime();
			let diff = parseInt((endtime-starttime)/1000);
			let duration = `${parseInt(diff/60)} min, ${diff%60} sec`;
			console.log(`${name}: ${time}, Went Offline`);
			console.log(`Duration: ${duration}`);
			return;
		}
		else if ((status.innerText==="online") && (cameOnline===false)){
			cameOnline = true;
			starttime = new Date().getTime();
			console.log(`${name}: ${time}, Came online`);
		}
	}
	catch(err) { }
}, 1000);