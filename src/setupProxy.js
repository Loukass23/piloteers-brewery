const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use('/proxy', proxy({
    pathRewrite: {
       '^/proxy/': '/'
    },
    target: 'https://server.com',
    secure: false
}));

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('Server started');