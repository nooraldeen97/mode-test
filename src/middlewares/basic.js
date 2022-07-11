"use strict";
const bcrypt=require("bcrypt");
const base64 = require('base-64');
const {Users}=require("../models/index");

async function basic(req,res,next){
    const data= req.headers.authorization.split(' ');
    const encodedData=base64.decode(data[1]);
    const userData=encodedData.split(":");
    const username=userData[0];
    const password=userData[1];
    console.log(username,password);
    try{
        let userInDB=await Users.findOne({where:{username:username}});
        console.log(userInDB);
        if(userInDB){
          let valid = await bcrypt.compare(password,userInDB.password);
            if(valid){
                req.user=userInDB;
                next();
            }else{
                next("invalid password");
            }
        }else{
            next("invalid username or password")
        }
    }catch(err){
    res.status(403).send("invalid login");
    }
}

module.exports=basic;