let req = await fetch('https://www.bing.com');
let bodyContent = await req.text();

let LStr = bodyContent.search(/<div id="bgImgProgLoad" data-ultra-definition-src="/i);
let RStr = bodyContent.search(/data-explicit-bing-load=/i);
let tempStr = bodyContent.substring(LStr,RStr).substring(52);
let imageURL = 'https://cn.bing.com/'+tempStr.replace(/\"/g,'');

console.log(imageURL);
Deno.exit(0);
