const dummy = async(req,res)=>{
   res.status(200).json({msg:"Dummy Protected route"})
}
module.exports =dummy