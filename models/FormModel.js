const Mongoose = require('mongoose');
require('../module/mongoose_connections');

const formSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    createAt: {
        type: Date, 
        default: Date.now
    },
    updateAt: {
        type: Date, 
        default: Date.now
    }
})
const Form = Mongoose.model('Form', formSchema);

class FormModel{
    constructor(){

    }
    async getAllData() {
        try {
            const forms = await Form.find();
            // console.log(forms)
            return forms

        } catch (error) {
            return error
        }
    }
    async getForm(id) {
        try {
            const form = await Form.findOne({_id: id})
            // console.log(form)
            return form
        } catch (error) {
            return error
        } 
    }
    async getUserForms(userId) {
        try {
            const forms = await Form.find({userId})
            console.log({modeldata: forms})
            return forms
        } catch (error) {
            return error
        }
    }
    async updateForm(search, data) {
        try {
            const updateForm = await Form.updateOne(search, data)
            console.log(updateForm)
            return updateForm
            
        } catch (error) {
            return error
        }
    }
    async createForm(data) {
        try {
            const createForm = await Form.create(data)
            // console.log(createForm)
            return createForm
        } catch (error) {
            // console.log(error)
            return error
        }
    }
    async deleteForm(id){
        try {
            const deleteForm = await Form.deleteOne({_id: id})
            console.log(deleteForm)

            return deleteForm
        } catch (error) {
            return error
        }
    }
}

module.exports = FormModel;