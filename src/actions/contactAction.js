import { contactService } from '../services/contactService'


export const loadContacts = (filter) => async dispatch => {
    const contacts = await contactService.getContacts(filter);
    return dispatch({ type: 'SET_CONTACTS', contacts })
}

export const removeContact = (id) => async dispatch => {
    await contactService.removeContact(id);
    return dispatch({ type: 'REMOVE_CONTACT', id })
}

export const saveContact = (contact) => async dispatch => {
    const type = (contact._id) ? '_updateContact' : '_addContact'
    const savedContact = await contactService.saveContact(contact)
    if (type === '_updateContact') {
        dispatch({ type: 'SAVE_CONTACT', contact: savedContact })
    } else {
        dispatch({ type: 'ADD_CONTACT', contact: savedContact })
    }
}

// export const getContactById = (id) => async dispatch => {
//     const contact = await contactService.getContactById(id)
//     return dispatch({ type: 'SET_CONTACT', contact })
// }