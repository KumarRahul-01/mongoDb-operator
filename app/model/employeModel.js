const mongoose=require('mongoose')
const{Schema}=mongoose

const EmployeeSchema= new Schema({
    emp_name:{
        type:String,
    },
    emp_age:{
        type:Number,
    },
    job_role:{
        type:String,
    },
    salary:{
        type:Number,
    }

})
const Employeemodel=mongoose.model("employeeModel",EmployeeSchema)
module.exports=Employeemodel