## If you're not okay with the script thing, I wrote a chrome extension too for this. [Go here](https://github.com/utkarsh914/whatsapp-stalker-chrome-extension)

# Whatsapp-Stalker
Track when people came online and went offline on WhatsApp Web
It can track only a single target at a time. So, don't hop from one person's chat to another. Leave it open on target's only.

## How to use:
1. Open whatsapp web, connect to your whatsapp account
2. Open browser console, paste the script in track.js and hit ENTER.
4. Two buttons to download log as csv and to toggle stalking process will appear in the header.
5. Open the person's chat and leave the tab open for as long as you want.
6. Script will log whenever person comes online or goes offline along with the online duration.
7. Log will be shown on the console and can also be downloaded as csv.

    <b>PS: Allow whatsApp web's notifications to receive a notification whenever target's status changes</b>

## Optionally:
You can use bookmark method for easier access.
Create a bookmark with url as below.
Place the bookmark on bookmark bar and set bar's setting to always show.
```bash
javascript:void function(){function a(){try{var a=new Date,b=a.toLocaleTimeString()+", "+a.toLocaleDateString(),c=document.querySelector("%23main > header > div._33QME > div > div > span").textContent,d=document.querySelector("%23main > header > div._33QME > div._2ruUq._3xjAz > span");if(null===d%26%26!0===l){l=!1,j=new Date().getTime();let a=parseInt((j-i)/1e3),e=`${parseInt(a/60)} min and ${a%2560} sec`;if(console.log(`${c}: ${b}, Went Offline`),console.log(`Duration: ${e}`),k+=`${c},${new Date(i).toLocaleTimeString()},${new Date(j).toLocaleTimeString()},${e}\n`,h()){let a=new Date(j),b=new Notification(`${c} went offline`,{icon:"https://img.icons8.com/ios-filled/50/000000/whatsapp.png",body:`from ${new Date(i).toLocaleTimeString()} to ${new Date(j).toLocaleTimeString()}\n Duration: ${e}`})}return}if(("online"===d.textContent||"typing\u2026"===d.textContent)%26%26!1==l%26%26(l=!0,i=new Date().getTime(),console.log(`${c}: ${b}, Came online`),h()))new Notification(`${c} came online`,{icon:"https://img.icons8.com/ios-filled/50/000000/whatsapp.png",body:`Time: ${new Date(i).toLocaleTimeString()}, ${new Date(i).toLocaleDateString()}\n`})}catch(a){}}function b(){try{m||(e(),g(),m=!0,h())}catch(a){}return n=setInterval(a,1e3),alert("Stalking!"),console.log("Stalking!"),alert("Provide permission if you want to get notifications when a user is online/offline.\n\nYou can turn notifications off if you don't want to recieve them"),n}function c(a){a=encodeURI(a);let b=document.createElement("a");b.setAttribute("href",a),b.setAttribute("download","stalk_data.csv"),document.body.appendChild(b),b.click()}function d(){c(k)}function e(){var a=document.createElement("button");a.textContent="GetCSV",a.style.padding="4px",a.style.margin="3px",a.style.border="1px solid black",a.onclick=d;var b=document.querySelector("%23side > header");b.appendChild(a)}function f(){-1===n%3F(b(),this.textContent="Stop"):(clearInterval(n),n=-1,alert("Stopped Stalking"),console.log("Stopped Stalking"),this.textContent="Stalk")}function g(){var a=document.createElement("button");a.style.padding="4px",a.style.margin="2px",a.style.border="1px solid black",a.textContent="Stop",a.onclick=f;var b=document.querySelector("%23side > header");b.appendChild(a)}function h(){if(!("Notification"in window))return!1;return!("granted"!==Notification.permission)||void("denied"!==Notification.permission%26%26Notification.requestPermission(function(a){if("granted"===a)return!0}))}var i,j,k="data:text/csv;charset=utf-8,Name,From,To,Duration\n",l=!1,m=!1,n=-1;b()}();
```
Click the bookmark to activate the script anytime with ease.
