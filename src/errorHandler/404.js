
function notFound(req,res,next){
    res.status(404).json({
        code:404,
        massage:"page not found"
    })
}


module.exports=notFound;