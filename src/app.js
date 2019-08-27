const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
app.use(cors());
mongoose.connect("mongodb://localhost:27017/POC",{useNewUrlParser:true}).then(()=>
{
    console.log("Successfully connected to mongoDB.");
});

const routerSchema=mongoose.Schema(
    {
        "name":
        {type:String},
        "nodeLegs":{type:Number}
    })


const routerModel = mongoose.model('routers',routerSchema)

app.get('/getRouters',async (req,res)=>
{
    
    try{
        const routers=await routerModel.find({});
        console.log(routers);
        res.send(routers);
        res.end();
    }
    catch
    {
        (err)=>{console.log(err)}
    }
   

})
app.get('/getRouter/:id',async (req,res)=>
{
    
    try{
       
        const routers=await routerModel.find();
        console.log(routers[req.params.id]);
        res.send(routers[req.params.id]);
        res.end();
    }
    catch
    {
        (err)=>{console.log(err)}
    }
   

})
app.listen(3000,function(){console.log("Listening to port 3000")});