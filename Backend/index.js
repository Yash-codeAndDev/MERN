const express  = require("express")
const app = express()

const port = 3000

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.get('/twitter' , (req,res)=>{
    
})
app.listen(port , () => {
    console.log(`App Listening on port ${port}`)
})