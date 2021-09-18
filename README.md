## If you're not okay with the script thing, See chrome extension. [Go here](https://github.com/utkarsh914/whatsapp-stalker-chrome-extension)

# Whatsapp-Stalker
Track when people came online and went offline on WhatsApp Web
It can track only a single target at a time. So, don't hop from one person's chat to another. Leave it open on target's only.
Don't worry! It won't steal your chats. I'm a good person :p

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
javascript:void%20function(){function%20a(){try{const%20a=document.querySelector(%22%23main%20%3E%20header%20%3E%20div._24-Ff%20%3E%20div%20%3E%20div%20%3E%20span%22).textContent,b=document.querySelector(%22%23main%20%3E%20header%20%3E%20div._24-Ff%20%3E%20div.zzgSd._3e6xi%20%3E%20span%22),c=document.querySelector(%22%23main%20%3E%20header%20%3E%20div._2YnE3%20%3E%20div%20%3E%20img%22),d=b%3Fb.textContent:null,e=c%3Fc.src:%22https://img.icons8.com/ios-filled/50/000000/whatsapp.png%22,f=new%20Date,g=f.toLocaleTimeString()+%22,%20%22+f.toLocaleDateString();if(null===d%26%26!0===m){m=!1,k=new%20Date().getTime();const%20b=parseInt((k-j)/1e3),c=`${parseInt(b/60)}%20min%20and%20${b%2560}%20sec`;console.log(`${a}:%20${g},%20Went%20Offline`),console.log(`Duration:%20${c}`);const%20d=new%20Date(j).toLocaleTimeString(),f=new%20Date(k).toLocaleTimeString();if(l+=`${a},${d},${f},${c}\n`,i()){new%20Notification(`${a}%20went%20offline`,{icon:e,body:`from%20${d}%20to%20${f}\n%20Duration:%20${c}`})}}else%20if((%22online%22===d||%22typing\u2026%22===d)%26%26!1==m){m=!0,j=new%20Date().getTime();const%20b=new%20Date(j).toLocaleTimeString(),c=new%20Date(k).toLocaleTimeString();if(console.log(`${a}:%20${g},%20Came%20online`),i()){new%20Notification(`${a}%20came%20online`,{icon:e,body:`Time:%20${b},%20${c}\n`})}}}catch(a){}}function%20b(){try{n||(f(),h(),n=!0,i())}catch(a){}return%20o=setInterval(a,1e3),alert(%22Stalking!%22),console.log(%22Stalking!%22),alert(%22Provide%20permission%20if%20you%20want%20to%20get%20notifications%20when%20a%20user%20is%20online/offline.\t\t\n\nYou%20can%20turn%20notifications%20off%20later%20if%20you%20don't%20want%20to%20recieve%20them%22),o}function%20c(a){a=encodeURI(a);let%20b=document.createElement(%22a%22);b.setAttribute(%22href%22,a),b.setAttribute(%22download%22,%22stalk_data.csv%22),document.body.appendChild(b),b.click()}function%20d(){l=%22data:text/csv;charset=utf-8,Name,From,To,Duration\n%22}function%20e(){c(l)}function%20f(){var%20a=document.createElement(%22button%22);a.textContent=%22GetCSV%22,a.style.padding=%224px%22,a.style.margin=%223px%22,a.style.border=%221px%20solid%20black%22,a.onclick=e;var%20b=document.querySelector(%22%23side%20%3E%20header%22);b.appendChild(a);var%20c=document.createElement(%22button%22);c.textContent=%22ResetCSV%22,c.style.padding=%224px%22,c.style.margin=%223px%22,c.style.border=%221px%20solid%20black%22,c.onclick=d;var%20b=document.querySelector(%22%23side%20%3E%20header%22);b.appendChild(c)}function%20g(){-1===o%3F(b(),this.textContent=%22Stop%22):(clearInterval(o),o=-1,alert(%22Stopped%20Stalking%22),console.log(%22Stopped%20Stalking%22),this.textContent=%22Stalk%22)}function%20h(){var%20a=document.createElement(%22button%22);a.style.padding=%224px%22,a.style.margin=%222px%22,a.style.border=%221px%20solid%20black%22,a.textContent=%22Stop%22,a.onclick=g;var%20b=document.querySelector(%22%23side%20%3E%20header%22);b.appendChild(a)}function%20i(){if(!(%22Notification%22in%20window))return!1;return!(%22granted%22!==Notification.permission)||void(%22denied%22!==Notification.permission%26%26Notification.requestPermission(function(a){if(%22granted%22===a)return!0}))}var%20j,k,l=%22data:text/csv;charset=utf-8,Name,From,To,Duration\n%22,m=!1,n=!1,o=-1;b()}();
```
Click the bookmark to activate the script anytime with ease.

made with: https://chriszarate.github.io/bookmarkleter/
