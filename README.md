# Whatsapp-Stalker
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
javascript:void%20function(){function%20a(){try{var%20a=new%20Date,b=a.toLocaleTimeString()+%22,%20%22+a.toLocaleDateString(),c=document.querySelector(%22%23main%20%3E%20header%20%3E%20div._5SiUq%20%3E%20div._16vzP%20%3E%20div%20%3E%20span%22).textContent,d=document.querySelector(%22%23main%20%3E%20header%20%3E%20div._5SiUq%20%3E%20div._3sgkv.Gd51Q%20%3E%20span%22);if(null===d%26%26!0===l){l=!1,j=new%20Date().getTime();let%20a=parseInt((j-i)/1e3),e=`${parseInt(a/60)}%20min%20and%20${a%2560}%20sec`;if(console.log(`${c}:%20${b},%20Went%20Offline`),console.log(`Duration:%20${e}`),k+=`${c},${new%20Date(i).toLocaleTimeString()},${new%20Date(j).toLocaleTimeString()},${e}\n`,h()){let%20a=new%20Date(j),b=new%20Notification(`${c}%20went%20offline`,{icon:%22https://img.icons8.com/ios-filled/50/000000/whatsapp.png%22,body:`from%20${new%20Date(i).toLocaleTimeString()}%20to%20${new%20Date(j).toLocaleTimeString()}\n%20Duration:%20${e}`})}return}if((%22online%22===d.textContent||%22typing\u2026%22===d.textContent)%26%26!1==l%26%26(l=!0,i=new%20Date().getTime(),console.log(`${c}:%20${b},%20Came%20online`),h()))new%20Notification(`${c}%20came%20online`,{icon:%22https://img.icons8.com/ios-filled/50/000000/whatsapp.png%22,body:`Time:%20${new%20Date(i).toLocaleTimeString()},%20${new%20Date(i).toLocaleDateString()}\n`})}catch(a){}}function%20b(){try{m||(e(),g(),m=!0,h())}catch(a){}return%20n=setInterval(a,1e3),alert(%22Stalking!%22),console.log(%22Stalking!%22),alert(%22Provide%20permission%20if%20you%20want%20to%20get%20notifications%20when%20a%20user%20is%20online/offline.\n\nYou%20can%20turn%20notifications%20off%20if%20you%20don't%20want%20to%20recieve%20them%22),n}function%20c(a){a=encodeURI(a);let%20b=document.createElement(%22a%22);b.setAttribute(%22href%22,a),b.setAttribute(%22download%22,%22stalk_data.csv%22),document.body.appendChild(b),b.click()}function%20d(){c(k)}function%20e(){var%20a=document.createElement(%22button%22);a.textContent=%22GetCSV%22,a.style.padding=%224px%22,a.style.margin=%223px%22,a.style.border=%221px%20solid%20black%22,a.onclick=d;var%20b=document.querySelector(%22%23side%20%3E%20header%22);b.appendChild(a)}function%20f(){-1===n%3F(b(),this.textContent=%22Stop%22):(clearInterval(n),n=-1,alert(%22Stopped%20Stalking%22),console.log(%22Stopped%20Stalking%22),this.textContent=%22Stalk%22)}function%20g(){var%20a=document.createElement(%22button%22);a.style.padding=%224px%22,a.style.margin=%222px%22,a.style.border=%221px%20solid%20black%22,a.textContent=%22Stop%22,a.onclick=f;var%20b=document.querySelector(%22%23side%20%3E%20header%22);b.appendChild(a)}function%20h(){if(!(%22Notification%22in%20window))return!1;return!(%22granted%22!==Notification.permission)||void(%22denied%22!==Notification.permission%26%26Notification.requestPermission(function(a){if(%22granted%22===a)return!0}))}var%20i,j,k=%22data:text/csv;charset=utf-8,Name,From,To,Duration\n%22,l=!1,m=!1,n=-1;b()}();
```
Click the bookmark to activate the script anytime with ease.
