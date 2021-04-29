import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addContact} from '../redux/actions/actions'

const AddModal = () => {

const dispatch = useDispatch()


const [newContact , setNewContact] = useState({

name:"" ,
email:"",
telephone:""
})




const onChange = (e) => {


setNewContact({...newContact , [e.target.name] : e.target.value})


}


const onSubmit = (e) => {

e.preventDefault() ;

dispatch(addContact(newContact))

setNewContact({
name :"" ,
email:"",
telephone:""

})



}





    return (
        <div>
            
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add New Contact
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={onSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" value={newContact.name} name="name" placeholder="contact name" onChange={onChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" name="email" value={newContact.email} class="form-control"  onChange={onChange} placeholder="contact email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Telephone</label>
    <input type="tel" name="telephone" value={newContact.telephone} placeholder="contact telephone"  onChange={onChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <button type="submit" class="btn btn-primary"  data-dismiss="modal" >Submit</button>
</form>











      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>







        </div>
    )
}

export default AddModal
