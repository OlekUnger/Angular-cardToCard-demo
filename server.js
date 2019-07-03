const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/ungers-cardToCard-demo'));
app.get('/*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'dist/ungers-cardToCard-demo/index.html'))
})
app.listen(process.env.PORT || 8080);
