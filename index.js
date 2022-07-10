require("dotenv").config();

const server=require("./src/server");
const {db,User}=require("./src/models/index");



db.sync().then(()=>{
    server.start(process.env.PORT||3001);
    
})