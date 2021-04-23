const express = require ('express') 
const router = express.Router()
const Contact = require ('../models/Contact')

// http://localhost:5000/contact/


//@method POST /contact
//@desc   add new contact

router.post('/' , (req,res) => {

const {name,email,telephone} = req.body

if(!name) {
    return res.send('name is required')
}
if(!email) {
    return res.send('email is required')
}


const newContact = new Contact({name,email,telephone})

newContact.save()
.then(()=> res.send({msg:"contact added" , newContact}))
.catch((err) => res.send({msg:"server error" , err}))


})

//@method GET /contact
//@desc   get all contacts

router.get('/' , (req,res) => {

Contact.find({})
.then((contacts) => res.send({msg:"all contacts" , contacts}))
.catch((err) => res.send({msg:"server error" , err}))





})


//@method PUT /contact/:id
//@desc  update a contact



router.put('/:contactID' , (req,res) => {


const {name,email,telephone} = req.body

if(!name) {

return res.send('name is required')

}
if(!email) {

return res.send('email is required')

}


Contact.findByIdAndUpdate(req.params.contactID , {name,email,telephone})
.then(()=>res.send({msg:"contact updated"}))
.catch(()=> res.send({msg:"server error" , err}))






})


//@method DELETE /contact/:id
//@desc  delete a contact

router.delete('/:id' , (req,res) => {

Contact.findByIdAndDelete(req.params.id)
.then(()=> res.send({msg:"contact deleted"}))
.catch((err) => res.send({msg:"server error",err}))






})














module.exports = router