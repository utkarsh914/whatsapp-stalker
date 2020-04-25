# Whatsapp-Stalker
## How to use:
1. Open whatsapp web, connect to your whatsapp account
2. Open browser console and paste the script in track.js
3. Hit enter
4. Two buttons to download log as csv and to toggle stalking process will appear in the header
5. Open the person's chat and leave the tab open for as long as you want
6. Script will log whenever person comes online or goes offline along with the online duration
7. Log will be shown on the console and can also be downloaded as csv

## Optionally:
You can use bookmark method for easier access.
Create a bookmark with url as below
```bash
javascript:void%20function(){function%20a(){try{var%20a=new%20Date,b=a.toLocaleTimeString()+%22,%20%22+a.toLocaleDateString(),c=document.querySelector(%22%23main%20%3E%20header%20%3E%20div._5SiUq%20%3E%20div._16vzP%20%3E%20div%20%3E%20span%22).textContent,d=document.querySelector(%22%23main%20%3E%20header%20%3E%20div._5SiUq%20%3E%20div._3sgkv.Gd51Q%20%3E%20span%22);if(null===d%26%26!0===k){k=!1,i=new%20Date().getTime();let%20a=parseInt((i-h)/1e3),d=`${parseInt(a/60)}%20min%20and%20${a%2560}%20sec`;return%20console.log(`${c}:%20${b},%20Went%20Offline`),console.log(`Duration:%20${d}`),void(j+=`${c},${new%20Date(h).toLocaleTimeString()},${new%20Date(i).toLocaleTimeString()},${d}\n`)}(%22online%22===d.textContent||%22typing\u2026%22===d.textContent)%26%26!1==k%26%26(k=!0,h=new%20Date().getTime(),console.log(`${c}:%20${b},%20Came%20online`))}catch(a){}}function%20b(){try{l||(e(),g(),l=!0)}catch(a){}return%20m=setInterval(a,1e3),alert(%22Stalking!%22),console.log(%22Stalking!%22),m}function%20c(a){a=encodeURI(a);let%20b=document.createElement(%22a%22);b.setAttribute(%22href%22,a),b.setAttribute(%22download%22,%22stalk_data.csv%22),document.body.appendChild(b),b.click()}function%20d(){c(j)}function%20e(){var%20a=document.createElement(%22button%22);a.textContent=%22GetCSV%22,a.style.padding=%224px%22,a.style.margin=%223px%22,a.style.border=%221px%20solid%20black%22,a.onclick=d;var%20b=document.querySelector(%22%23side%20%3E%20header%22);b.appendChild(a)}function%20f(){-1===m%3F(b(),this.textContent=%22Stop%22):(clearInterval(m),m=-1,alert(%22Stopped%20Stalking%22),console.log(%22Stopped%20Stalking%22),this.textContent=%22Stalk%22)}function%20g(){var%20a=document.createElement(%22button%22);a.style.padding=%224px%22,a.style.margin=%222px%22,a.style.border=%221px%20solid%20black%22,a.textContent=%22Stop%22,a.onclick=f;var%20b=document.querySelector(%22%23side%20%3E%20header%22);b.appendChild(a)}var%20h,i,j=%22data:text/csv;charset=utf-8,Name,From,To,Duration\n%22,k=!1,l=!1,m=-1;b()}();
```
Click the bookmark to activate the script
