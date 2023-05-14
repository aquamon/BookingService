const express = require('express');

const app = express();
const PORT = 3002;
const setUpAndStartServer = () => {
    app.listen(PORT,() => {
        console.log(`Server started on Port : ${PORT}`);
    })
}
setUpAndStartServer();