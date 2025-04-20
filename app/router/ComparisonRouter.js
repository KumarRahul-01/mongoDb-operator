const express=require('express')
const ComparisonController = require('../controller/ComparisonController')
const router=express.Router()


 /******************** CREATE INVENTORY ROUTER**********************/
router.post('/create-inventory',ComparisonController.create_Inventory)

 /******************** CREATE INVENTORY ROUTER**********************/
router.post('/create-employee',ComparisonController.create_Employee)

/*****************************************************************/
// router.post('/create-jsondata',ComparisonController._jsonSchema)

router.post('/create-salesPromo',ComparisonController.createPromo)

 /******************** GET INVENTORY ROUTER **********************/
router.get('/get-inventory',ComparisonController.get_Inventory)


 /******************** GET EMPLOYEE ROUTER **********************/
 router.get('/get-employee',ComparisonController.get_Employee)

router.post('/update-inventory/:id',ComparisonController.update_Inventory)

router.get('/get-inventory/eq',ComparisonController._eq)

router.get('/get-inventory/gt',ComparisonController._gt)

router.get('/get-inventory/lt',ComparisonController._lt)

router.get('/get-inventory/gte',ComparisonController._gte)

router.get('/get-inventory/lte',ComparisonController._lte)

router.get('/get-inventory/in',ComparisonController._in)

router.get('/get-inventory/nin',ComparisonController._nin)

router.get('/get-inventory/ne',ComparisonController._ne)

router.get('/get-employee/and',ComparisonController._and)

router.get('/get-employee/or',ComparisonController._Or)

router.get('/get-employee/nor',ComparisonController._nor)

router.get('/get-employee/not',ComparisonController._not)

router.get('/get-employee/exists',ComparisonController._exists)

router.get('/get-employee/type',ComparisonController._type)

router.get('/get-inventory/all',ComparisonController._all)

router.get('/get-inventory/size',ComparisonController._size)

// router.get('/get-inventory/elematch',ComparisonController._elemMatch)

router.get('/get-employee/sortAscending',ComparisonController._sortAscending)

router.get('/get-employee/sortDescending',ComparisonController._sortDescending)

router.get('/get-employee/projection',ComparisonController._projection) 


module.exports=router