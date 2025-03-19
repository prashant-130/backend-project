const express= require('express')
const cors= require('cors')
require('./db/config')
const User=require('./db/Users')
const app=express()
app.use(cors())

app.use(express.json())

// const connectDB = async()=>
// {
//   mongoose.connect('mongodb+srv://blurrystar007:gLDfK8RVM8NbbHb0@cluster0.tj8ae.mongodb.net/e-comm')

//   const productSchema= new mongoose.Schema({})

//   const product= mongoose.model('product',productSchema)

//   const data= await product.find()
//   console.log(data)
// }
// connectDB()

app.post('/register',async(req,resp)=>
{
  let user =new User(req.body)
  let result=await user.save()
    resp.send(user)
})
app.listen(5600,()=>
{
    console.log('app is running')
})