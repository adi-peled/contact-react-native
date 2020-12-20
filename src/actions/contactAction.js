import { contactService } from '../services/contactService'


export const loadContacts = (filter) => async dispatch => {
    const contacts = await contactService.getContacts(filter);
    return dispatch({ type: 'SET_CONTACTS', contacts })
}

// save or update worker, then 
// getting workers from backend and sending to reducer to update state
// export const addUpdateWorker = (worker) => async dispatch => {
//     await workerService.saveWorker(worker);
//     const response = await workerService.getWorkers()
//     return dispatch({ type: 'SET_WORKERS', payload: response })
// }

// delete worker, then
// getting workers from backend and sending to reducer to update state

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