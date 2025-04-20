const express=require('express')
const body_parser=require('body-parser')
const dotenv=require('dotenv')
const db=require('./app/config/dbConfig')

dotenv.config()
const app=express()
db()

app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())


const comparisonRouter=require('./app/router/ComparisonRouter')
app.use(comparisonRouter)

const port=7000
app.listen(port,()=>{
    console.log(`server listening on http://localhost:${port}`);
})