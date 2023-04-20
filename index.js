const express = require("express")
const port = 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("Server is running");
});


app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})