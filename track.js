var csvContent = "data:text/csv;charset=utf-8,Name,From,To,Duration\n";
var cameOnline = false;
var stalking = false;
var buttonAdded = false;
var starttime;
var endtime;
var running = -1;

function f() {
	try {
		var dt = new Date();
		var time = dt.toLocaleTimeString() + ', ' + dt.toLocaleDateString();
		var name = document.querySelector("#main > header > div._5SiUq > div._16vzP > div > span").textContent;
		var status = document.querySelector("#main > header > div._5SiUq > div._3sgkv.Gd51Q > span");

		if ((status===null) && (cameOnline===true)){
			cameOnline = false;
			endtime = new Date().getTime();
			let diff = parseInt((endtime-starttime)/1000);
			let duration = `${parseInt(diff/60)} min and ${diff%60} sec`;
			console.log(`${name}: ${time}, Went Offline`);
			console.log(`Duration: ${duration}`);
			csvContent += `${name},${new Date(starttime).toLocaleTimeString()},${new Date(endtime).toLocaleTimeString()},${duration}\n`
			return;
		}
		else if ((status.textContent==="online" || status.textContent==="typing…") && (cameOnline===false)){
			cameOnline = true;
			starttime = new Date().getTime();
			console.log(`${name}: ${time}, Came online`);
		}
	}
	catch(err) { return }
}

function stalk() {
	try{
		if (!buttonAdded) {
		putCSVLink();
		putStopStalkButton();
		buttonAdded = true;
	}
	}catch(e){}

	running = setInterval(f, 1000);
	alert("Stalking!");
	console.log("Stalking!");
	return running;
}
function getCSV(data) {
	data = encodeURI(data);
	let link = document.createElement("a");
	link.setAttribute("href", data);
	link.setAttribute("download", "stalk_data.csv");
	document.body.appendChild(link);
	link.click();
}
function getStalkData() {
	getCSV(csvContent);
}
function putCSVLink() {
	var button = document.createElement("button");
	button.textContent = "GetCSV";
	button.style.padding = "4px";
	button.style.margin = "3px";
	button.style.border = "1px solid black";
	button.onclick = getStalkData;
	var sideBar = document.querySelector("#side > header");
	sideBar.appendChild(button);
}
function toggleStalk() {
	if (running === -1) {
		stalk();
		this.textContent = "Stop";
	} else {
		clearInterval(running);
		running = -1;
		alert("Stopped Stalking");
		console.log("Stopped Stalking");
		this.textContent = "Stalk";
	}
}
function putStopStalkButton() {
	var button = document.createElement("button");
	button.style.padding = "4px";
	button.style.margin = "2px";
	button.style.border = "1px solid black";
	button.textContent = "Stop";
	button.onclick = toggleStalk;
	var sideBar = document.querySelector("#side > header");
	sideBar.appendChild(button);
}
stalk();