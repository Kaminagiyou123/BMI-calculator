const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/bmi.html')
})

app.post('/',(req,res)=>{
    const height=Number(req.body.height)
    const weight=Number(req.body.weight)
    const BMI= weight/height/height*10000
    res.send('Your BMI is '+BMI)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})