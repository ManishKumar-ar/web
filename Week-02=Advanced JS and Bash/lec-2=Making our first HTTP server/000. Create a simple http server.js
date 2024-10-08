
//   npm init -y    ===> to initialize node in the code
//  npm install express  ==> to use the express locally

const ex = require('express')   // here we import express
const app = ex()          // here we create a object for express to uses its fucntion
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

