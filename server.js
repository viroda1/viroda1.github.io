const express = require('express');
const request = require('request');

const app = express();

app.use('/proxy', (req, res) => {
    const url = req.query.url;

    if (!url) return res.send("No URL");

    req.pipe(request(url)).pipe(res);
});

app.listen(3000, () => {
    console.log("Proxy running on port 3000");
});
