import React , {useState , useEffect} from 'react';
import Modal from 'react-modal';
import {useDispatch} from 'react-redux'
import {updateContact} from '../redux/actions/actions'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



function  UpdateModal ({modalIsOpen , setIsOpen , id , contactToUpdate}){

useEffect(() => {

setNewValue({
name : contactToUpdate.name ,
email : contactToUpdate.email ,
telephone : contactToUpdate.telephone



})

 
}, [contactToUpdate])



const dispatch = useDispatch()

const [newValue , setNewValue] = useState({

name: "",
email:"" ,

telephone:""

})


const onChange = (e) => {


setNewValue({...newValue , [e.target.name] : e.target.value })

}


const onSubmit =(e) => {

e.preventDefault();

dispatch(updateContact(id , newValue))

setNewValue({
name : "" ,
email:"" ,
telephone:""


})

closeModal()


}








  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          
        >
    <h2>Update contact</h2>

    <form onSubmit={onSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" value={newValue.name} name="name" placeholder="contact name" onChange={onChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" name="email" value={newValue.email} class="form-control"  onChange={onChange} placeholder="contact email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Telephone</label>
    <input type="tel" name="telephone" value={newValue.telephone} placeholder="contact telephone"  onChange={onChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>





          <button onClick={closeModal}>close</button>
         
          
        </Modal>
      </div>
    );
}

export default UpdateModal
