const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(
        `
        <h1 style="text-align:center"> 
            Current Unix Time Stamp: ${Date.now()} 
        </h1>
        `
    );
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
