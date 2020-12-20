import { contactService } from '../services/contactService'


export const loadContacts = (filter) => async dispatch => {
    const contacts = await contactService.getContacts(filter);
    return dispatch({ type: 'SET_CONTACTS', contacts })
}

export const removeContact = (id) => async dispatch => {
    await contactService.removeContact(id);
    return dispatch({ type: 'REMOVE_CONTACT', id })
}

export const addContact = (contact) => async dispatch => {
    await contactService.addContact(contact)
    return dispatch({ type: 'ADD_CONTACT', contact })
}