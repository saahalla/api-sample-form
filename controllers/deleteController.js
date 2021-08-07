const FormModel = require('../models/FormModel')
const Forms = new FormModel()

module.exports = async(req, res, next) => {
    const id = req.params.id;
    
    const deleteForm = await Forms.deleteForm(id);

    console.log(deleteForm);

    if(deleteForm.deletedCount === 1){
        res.send({status: true, message: 'form has been deleted', result: deleteForm})
    }else{
        res.status(404).send({status: false, message: 'form not found', result: deleteForm})
    }

}