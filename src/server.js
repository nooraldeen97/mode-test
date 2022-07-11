const express=require("express");
const serverError=require("./errorHandler/500");
const notFound=require("./errorHandler/404");
const {Users}=require("./models/index.js");
const bcrypt=require("bcrypt");
const basic=require("./middlewares/basic");
const app=express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.send("welcome to the home route");

})

app.post("/signup",async(req,res)=>{
    req.body.password=await bcrypt.hash(req.body.password,10);
    let isUserInDB=await Users.findOne({where:{username:req.body.username}});
    if(isUserInDB){
        res.status(403).send("username is already exist");
    }else{
        try{
            let user=await Users.create(req.body);
            res.status(201).json(user);
        }catch(err){
            console.log(err);
        }
    }
    
})

app.post("/signin",basic,(req,res)=>{
res.send(req.user);    
})

app.use("*",notFound);
app.use(serverError);

function start(port){

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})
}


module.exports={
    app:app,
    start:start
}