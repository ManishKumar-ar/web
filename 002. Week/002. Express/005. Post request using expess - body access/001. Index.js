const express = require("express");
const app = express();


const bodyparser  = require("body-parser")

app.use(bodyparser.text())

app.post('/', (req, res) => {

  console.log(req.body)
 
  
  res.send(
    ' i am the server and i see you password and details'
  )
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
