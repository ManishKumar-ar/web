const express = require("express");
const app = express();


app.post('/', (req, res) => {

  console.log(req.headers["auth"])
  console.log(req.headers["details"])
  
  res.send(
    ' i am the server and i see you password and details'
  )
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

