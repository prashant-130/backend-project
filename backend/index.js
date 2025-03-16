const express= require('express')

app=express()

app.get('/',(req,resp)=>
{
  resp.send("app is working")
})

app.listen(6000,()=>
{
    console.log('app is running')
})