const Inventorymodel=require('../model/inventoryModel')
const Employeemodel=require('../model/employeModel')
// const promomodel=require('../model/promoModel')
const salespromomodel=require('../model/salespromoModel')
class Operator{


    /******************** CREATE INVENTORY **********************/

    async create_Inventory(req,res){
        try {
            const {productid,name,price,quantity,category}=req.body
            const inventory = new Inventorymodel({
                productid,
                name,
                price,
                quantity,
                category
            })
            const inventorydata=await inventory.save()
            if(inventorydata){
                return res.status(200).json({
                    status:true,
                    data:inventorydata
                })  
            }
        } catch (error) {
           return res.status(500).json({
            statu:false,
            message:error.message
           }) 
        }
    }


 /******************** CREATE EMPLOYEE **********************/

    async create_Employee(req,res){
        try {
            const{emp_name,emp_age,job_role,salary}=req.body
            const employee= new Employeemodel({
                emp_name,
                emp_age,
                job_role,
                salary
            })
            const employeedata= await employee.save()
            if(employeedata){
                return res.status(200).json({
                    status:true,
                    data:employeedata
                })
            }
            
        } catch (error) {
            return res.status(500).json({
                status:false,
                message:error.message
            })
            
        }
    }

/********************** CREATE RECORDS FOR  JSONSCHEMA******************/

    // async create_jsonSchema(req,res){
    //     try {
    //         const{name,period,daily_sales}=req.body
    //         const jsonschema= new promomodel({
    //             name,period,daily_sales
    //         })
    //         const jsondata=await jsonschema.save()
    //         if(jsondata){
    //             return res.status(200).json({
    //                 status:true,
    //                 data:jsondata
    //             })
    //         }
    //     } catch (error) {
    //         return res.status(500).json({
    //             status:false,
    //             message:error.message
    //         })
    //     }
    // } 
    /****************** GET ALL  INVENTORY *********************/


    /************************** CREATE SALESPROMO RECORD************************************/

 async createPromo(req,res){
    try {
        const {name,period,daily_sales}=req.body;
        const createpromo= new salespromomodel({
            name,
            period,
            daily_sales
        })
        const salesdata= await createpromo.save()
        if(salesdata){
            return res.status(200).json({
                statuys:true,
                data:salesdata
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
 } 
    async get_Inventory(req,res){
        try {
            const allInventory=await Inventorymodel.find()
            if(allInventory){
                return res.status(200).json({
                    status:true,
                    data:allInventory
                })
            }
        } catch (error) {
            return res.status(500).json({
                status:false,
                message:error.message
            })
        }
    }

 /****************** GET ALL  INVENTORY *********************/
 async get_Employee(req,res){
    try {
        const allemployee=await Employeemodel.find()
        if(allemployee){
            return res.status(200).json({
                status:true,
                data:allemployee
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
 }

    async update_Inventory(req,res){
        try {
            const id=req.params.id
            const inventory_data=  await Inventorymodel.findByIdAndUpdate(id,req.body)
            if(inventory_data){
                return res.status(200).json({
                    status:true,
                    message:"data updated successfully"
                })
            }
        } catch (error) {
            return res.status(500).json({
                status:false,
                message:error.message
            })
        }
    }




/************************************* COMPARISION OPERATOR ($eq,$gt,$lt,$GTE,$lte,$in,$ne,$nin)*****************************************************************************/


    
    /*****************  GET INVENTORY $eq    **********************/
 
    async _eq(req,res){
        try {
            const inventory= await Inventorymodel.find({"quantity": { $eq: "3526"}}) 
            // const inventory=await Inventorymodel.aggregate([
            //     {
            //         $project:{
            //             __v:0
            //         }
            //     },

            //     {
            //         $match:{
            //             quantity:{
            //                 $eq:"3526"
            //             }
            //         }   
            //     }

            // ])
            if(inventory) {
                return res.status(200).json({
                    status:true,
                    data:inventory
                })
            }
        } catch (error) {
            return res.status(500).json({
                status:false,
                message:error.message
            })
        }
    }
    
/****************** GET INVENTORY GREATER THAN $gt************************/

    async _gt(req,res){
        try {
            //const inventory= await Inventorymodel.find({"quantity":{$gt:"50000"}})
            const inventory= await Inventorymodel.aggregate([
                {
                    $project:{
                        __v:0,
                        category:0
                    },
                    
                },
                {
                    $match:{
                        quantity:{
                            $gt:"50000"
                        }
                    }
                },
                {
                    $sort:{
                        quantity:-1
                    }
                },
                {
                    $limit:10
                },
                
            ])
            if(inventory) {
                return res.status(200).json({
                    status:true,
                    data:inventory
                })
            }
   
        } catch (error) {
            return res.status(500).json({
                status:false,
                message:error.message
            })
        }
    }


/****************** GET INVENTORY LESS THAN $lt************************/
async _lt(req,res){
    try {
        const inventory= await Inventorymodel.find({"quantity":{$lt:"50000"}})
        if(inventory) {
            return res.status(200).json({
                status:true,
                data:inventory
            })
        }

    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

/****************** GET INVENTORY GREATER THAN OR EQUAL $GTE************************/
async _gte(req,res){
    try {
        const inventory=await Inventorymodel.find({"quantity": { $gte: 888948}})
        if(inventory) {
            return res.status(200).json({
                status:true,
                data:inventory
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}


/****************** GET INVENTORY LESSER THAN OR EQUAL $LTE************************/
async _lte(req,res){
    try {
        const inventory=await Inventorymodel.find({"quantity": { $lte: 35300}})
        if(inventory) {
            return res.status(200).json({
                status:true,
                data:inventory
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

/****************** GET INVENTORY WHERE THE FIELD CONTAINS THE GIVEN VALUE $IN************************/

async _in(req,res){
    try {
        const inventory=await Inventorymodel.find({"price": { $in: [385, 3859]}})
        if(inventory) {
            return res.status(200).json({
                status:true,
                data:inventory
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}


/****************** GET INVENTORY WHERE THE FIELD DOESN'T CONTAINS THE GIVEN VALUE $NIN************************/

async _nin(req,res){
    try {
        const inventory=await Inventorymodel.find({"price": { $nin: [385,3859]}})
        if(inventory) {
            return res.status(200).json({
                status:true,
                data:inventory
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

/****************** GET INVENTORY WHERE THE FIELD DOESN'T CONTAINS THE GIVEN VALUE $NE************************/
async _ne(req,res){
    try {
        const inventory=await Inventorymodel.find({"price": { $ne: 385}})
        if(inventory) {
            return res.status(200).json({
                status:true,
                data:inventory
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}



/***************************************** LOGICAL OPERATOR($and,$or,$nor) *************************************************************************************/


/***************** $and Operator***************************/
async _and(req,res){
    try {
        const employee= await Employeemodel.find({ $and: [{"job_role": "Store Associate"}, {"emp_age": {$gte: 20, $lte: 30}}]})
        if(employee){
            return res.status(200).json({
                status:true,
                data:employee
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}



/**************** $or Operator******************/
async _Or(req,res){
    try {
        const employee= await Employeemodel.find({ $or: [{"job_role": "Senior Cashier"}, {"job_role": "Store Manager"}]})
        if(employee){
            return res.status(200).json({
                status:true,
                data:employee
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
        
    }
}

/**************** $nor Operator******************/

async _nor(req,res){
    try {
        const employee= await Employeemodel.find({ $nor :[{"job_role": "Senior Cashier"}, {"job_role": "Store Manager"}]})
        if(employee){
            return res.status(200).json({
                status:true,
                data:employee
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

/**************** $not Operator******************/
async _not(req,res){
    try {
        const employee= await Employeemodel.find({ "emp_age": { $not: { $gte: 40}}})
        if(employee){
            return res.status(200).json({
                status:true,
                data:employee
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

/*************************** ELEMENT OPERATORS($exists,$type) ******************************************/


async _exists(req,res){
    try {
        const employee=await Employeemodel.find({ "emp_age": { $exists: true, $gte: 30}})
        if(employee){
            return res.status(200).json({
                status:true,
                data:employee
            })
        }
    } catch (error) {
        return res.status(500).json({
             status:false,
             message:error.message
        })
    }
}


async _type(req,res){
    try {
        const employee=await Employeemodel.find({ "emp_age": { $type: "int"}})
        if(employee){
            return res.status(200).json({
                status:true,
                data:employee
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}


/******************************** EVALUATION OPERATOR ()**************************************************/

// async _jsonSchema(req,res){
//     try {
        
//             const jsonvalidate=await promoschema
//     } catch (error) {
        
//     }
// }

/************************************ ARRAY OPERATOR *******************************************************/
async _all(req,res){
    try {
        /** need to be both exist in the data**/
        const inventorydata=await Inventorymodel.find({ "category": { $all: ["Healthy", "oraganic"]}})
        if(inventorydata){
            return res.status(200).json({
                status:true,
                data:inventorydata
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message

        })
    }
}


async _size(req,res){
    try {
        /**Find documents where the category array field has two elements.*/
        const sizedata =await Inventorymodel.find({ "category": { $size: 2}})
        if(sizedata){
            return res.status(200).json({
                status:true,
                data:sizedata
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

/******************************** $elemMatch Operator*******************************************************/
// async _elemMatch(req,res){
//     try {
//         const elementmatch=await Inventorymodel.find({ "daily_sales": { $elemMatch: {$gt: 100, $lt: 200}}})
//         if(elementmatch){
//             return res.status(200).json({
//                 status:true,
//                 data:elementmatch
//             })
//         }
//     } catch (error) {
//         return res.status(500).json({
//             status:false,
//             message:error.message
//         })
//     }
// }

/******************* EMPLOYEE DATA SORT IN ASCENDING ORDER BASE ON SALARY**********************/

async _sortAscending(req,res){
    try {
        /****** 1 for Ascending ******/
        const Employeedata=await Employeemodel.find().sort({salary:1})
        if(Employeedata){
            return res.status(200).json({
                status:true,
                data:Employeedata
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

/******************* EMPLOYEE DATA SORT IN DESCENDING ORDER BASE ON SALARY**********************/

async _sortDescending(req,res){
    try {
        /****** -1 for Ascending ******/
        const Employeedata=await Employeemodel.find().sort({salary:-1})
        if(Employeedata){
            return res.status(200).json({
                status:true,
                data:Employeedata
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

/******************* AGGREGATE WITH PROJECT AND SORT (DESCENDING)************************/
async _projection(req,res){
    try {
       // const dataprojection = await Employeemodel.find({},{emp_name:1})
        const dataprojection = await Employeemodel.aggregate([
            {
                $project:{
                    "emp_name":1,
                    "salary":1
                }
            },
            {
                $sort:{
                    salary:-1
                }
            }
        ])
        if(dataprojection){
            return res.status(200).json({
                status:true,
                data:dataprojection
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}
}

module.exports=new Operator()