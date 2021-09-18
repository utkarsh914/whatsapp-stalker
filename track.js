var csvContent = "data:text/csv;charset=utf-8,Name,From,To,Duration\n";
var cameOnline = false;
var stalking = false;
var buttonAdded = false;
var showNotif = false;
var starttime;
var endtime;
var running = -1;

function f() {
	try {
		// select all elements first
		const name = document.querySelector("#main > header > div._24-Ff > div > div > span").textContent;
		const statusDiv = document.querySelector("#main > header > div._24-Ff > div.zzgSd._3e6xi > span");
		const dpDiv = document.querySelector("#main > header > div._2YnE3 > div > img");
		const status = statusDiv ? statusDiv.textContent : null;
		const dp_url = dpDiv ? dpDiv.src : 'https://img.icons8.com/ios-filled/50/000000/whatsapp.png';

		const dt = new Date();
		const time = dt.toLocaleTimeString() + ', ' + dt.toLocaleDateString();

		if (status === null && cameOnline === true) {

			cameOnline = false;
			endtime = new Date().getTime();
			const diff = parseInt( (endtime - starttime) / 1000 );
			const duration = `${ parseInt(diff / 60) } min and ${ diff % 60 } sec`;
			console.log(`${name}: ${time}, Went Offline`);
			console.log(`Duration: ${duration}`);

			const startDate = new Date(starttime).toLocaleTimeString();
			const endDate = new Date(endtime).toLocaleTimeString();
			// add to CSV
			csvContent += `${name},${startDate},${endDate},${duration}\n`;
			// send notification
			if (checkPermission()) {
				let notif = new Notification(`${name} went offline`, {
					icon: dp_url,
					body: `from ${startDate} to ${endDate}\n Duration: ${duration}`
				});
			}
		}

		else if ((status === "online" || status === "typing…")
			&& (cameOnline === false)) {

			cameOnline = true;
			starttime = new Date().getTime();
			const startDate = new Date(starttime).toLocaleTimeString();
			const endDate = new Date(endtime).toLocaleTimeString();
			console.log(`${name}: ${time}, Came online`);
			// send notification
			if (checkPermission()) {
				let notif = new Notification(`${name} came online`, {
					icon: dp_url,
					body: `Time: ${startDate}, ${endDate}\n`
				});
			}
		}
	}

	catch(err) {
		return;
	}
}



function stalk() {
	try {
		if (!buttonAdded) {
			putCSVLink();
			putStopStalkButton();
			buttonAdded = true;
			checkPermission();
		}
	}
	catch (e){

	}

	running = setInterval(f, 1000);
	alert("Stalking!");
	console.log("Stalking!");
	alert("Provide permission if you want to get notifications when a user is online/offline.\
		\n\nYou can turn notifications off later if you don't want to recieve them");
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



function resetCSV() {
	csvContent = "data:text/csv;charset=utf-8,Name,From,To,Duration\n";
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
	// create reset csv data button
	var button2 = document.createElement("button");
	button2.textContent = "ResetCSV";
	button2.style.padding = "4px";
	button2.style.margin = "3px";
	button2.style.border = "1px solid black";
	button2.onclick = resetCSV;
	var sideBar = document.querySelector("#side > header");
	sideBar.appendChild(button2);
	
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



function checkPermission() {
	if (!("Notification" in window)) {
		return false;
	}
	else if (Notification.permission === "granted") {
		return true;
	}
	else if (Notification.permission !== 'denied') {
		Notification.requestPermission(function(permission) {
			if (permission === "granted") {
				return true;
			}
		});
	}
}