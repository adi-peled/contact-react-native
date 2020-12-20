import { contactService } from '../services/contactService'


export const loadContacts = (filter) => async dispatch => {
    const contacts = await contactService.getContacts(filter);
    return dispatch({ type: 'SET_CONTACTS', contacts })
}

export const removeContact = (id) => async dispatch => {
    await contactService.removeContact(id);
    const contacts = await contactService.getContacts()
    return dispatch({ type: 'SET_CONTACTS', contacts })
}

export const addContact = (contact) => async dispatch => {
    await contactService.addContact(contact)
    const contacts = await contactService.getContacts()
    return dispatch({ type: 'SET_CONTACTS', contacts })
}