import {GET_CONTACTS , ADD_CONTACT , DELETE_CONTACT , UPDATE_CONTACT} from './actionsTypes'
import axios from 'axios'




export const getContacts = () => dispatch => {

axios.get('/contact')
.then((res) => dispatch({type:GET_CONTACTS , payload: res.data.contacts}) )
.catch((err) => console.log(err))


}




export const addContact = (newContact) => dispatch => {

axios.post('/contact' , newContact)
.then((res) => {

dispatch({type:ADD_CONTACT})

dispatch(getContacts())
})
.catch(err=> console.log(err))

}


export const deleteContact = (id) =>dispatch=> {

axios.delete(`/contact/${id}`)
.then((res) => {

dispatch({type:DELETE_CONTACT })

dispatch(getContacts())

})
.catch((err) => console.log(err))

// return {type:DELETE_CONTACT , payload : id}
}


export const updateContact = (id , newValue) => dispatch => {

axios.put(`/contact/${id}` , newValue)
.then ((res) => {

dispatch({type:UPDATE_CONTACT})

dispatch(getContacts())

})
.catch((err) => console.log(err))

}