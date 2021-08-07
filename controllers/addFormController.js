const FormModel = require('../models/FormModel')
const Forms = new FormModel()

module.exports = async(req, res, next) => {
    const {name, email, dob, address, phone} = req.body
    const insertData = {
        name, 
        email,
        dob, 
        address,
        phone
    }
    const create = await Forms.createForm(insertData)
    console.log(create)
    
    if(create._id){
        res.send({status: true, data: create})
    } else {
        res.send({status: false, error: create})
    }
}