const express = require('express');
const routes = require('./routes/route')
const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("Weclome to my weather app");
})

app.use("/api/routes",routes);


const PORT = 4600;

app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});