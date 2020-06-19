const axios = require('axios')
const express = require('express')
const app = new express();

app.get('/',async (req, res) => {
    let getResult = await axios.get('https://www.bing.com/')
    let LStr = getResult.data.search(/<div id="bgImgProgLoad" data-ultra-definition-src="/i)
    let RStr = getResult.data.search(/data-explicit-bing-load=/i)
    let tempStr = getResult.data.substring(LStr,RStr).substring(52)
    let imageURL = 'https://cn.bing.com/'+tempStr.replace(/\"/g,'');
    res.status(200).send(JSON.stringify({
        jsonrpc: '2.0',
        id: 'null',
        result: imageURL
    }))
})

var server = app.listen(8081, () => {
 
  var host = server.address().address
  var port = server.address().port
  console.log('Bing Today Image')
  console.log('URL: http://'+host+':'+port)
 
})
