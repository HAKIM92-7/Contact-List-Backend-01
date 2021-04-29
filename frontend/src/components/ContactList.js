import React, { useEffect , useState} from 'react'
import {useSelector , useDispatch} from "react-redux"
import {getContacts , deleteContact} from '../redux/actions/actions'
import AddModal from './AddModal'
import UpdateModal from "./UpdateModal"

const ContactList = () => {

const dispatch = useDispatch()

useEffect(() => {
  
  dispatch(getContacts())

}, [])



const contacts = useSelector(state => state.contacts)

const [modalIsOpen , setIsOpen] = useState(false)

const [id  , setId] = useState(null)

const [contactToUpdate , setContact] = useState({})

    return (


        <div>


     <UpdateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} id={id} contactToUpdate={contactToUpdate}/>

    {  contacts ?      

        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Telephone</th>
      <th><AddModal/></th>
      <th></th>
    </tr>
  </thead>
  <tbody>

     {  contacts.map ((contact , i ) =>

    <tr key={i}>
      <th scope="row">{i+1}</th>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.telephone}</td>
      <td><button className="btn btn-danger" onClick={()=> dispatch(deleteContact(contact._id))}>X</button></td>
      <td><button className="btn btn-warning" onClick={() => {
        setIsOpen(true)
        setId(contact._id)
        setContact(contact)
        
        }} >EDIT</button></td>
   
   
    </tr>
)}
   
  </tbody>
</table> : <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>



     }

        </div>
    )
}

export default ContactList
