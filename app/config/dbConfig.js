const mongoose=require('mongoose')

const Db=async()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGO_URL)
        console.log(`database connected with application`);
        
    } catch (error) {
        
    }
}
module.exports=Db