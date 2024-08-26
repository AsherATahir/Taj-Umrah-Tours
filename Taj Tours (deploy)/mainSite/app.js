const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const assetsPath = path.resolve(__dirname, 'assets');

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(assetsPath)));

app.use(express.json());

app.listen(port, () => console.log(`Anddd, we are live on port ${port}`));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});
