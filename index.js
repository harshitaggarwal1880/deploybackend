const express = require("express")
const PORT = 5050;
const app = express();

app.get("/", (req, res) => {
    res.send("Server is running");
});


app.listen(Port || 5000, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})