const FormModel = require('../models/FormModel')
const Forms = new FormModel()

module.exports = async(req, res, next) => {
    const forms = await Forms.getAllData()
    
    if(forms.length > 0){
        res.send({status: true, data: forms})
    } else {
        res.send({status: false, error: forms})
    }
}