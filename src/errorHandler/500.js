
function serverErrorHandler(error,req,res,next){

res.status(500).json({
    code:500,
    massage:`internal server error ${error}`
})
}


module.exports=serverErrorHandler;