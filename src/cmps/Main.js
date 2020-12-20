import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactList from './ContactList'
import Filter from './Filter'
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts, removeContact, saveContact, } from '../actions/contactAction';
import AddContact from './AddContact'
import { contactService } from '../services/contactService'
export default function Main() {

    const dispatch = useDispatch()
    const contactState = useSelector(state => state.contact)
    const [contact, setContact] = useState(null)

    const onFilter = (filter) => {
        dispatch(loadContacts(filter))
    }

    const onRemoveContact = (id) => {
        dispatch(removeContact(id))
    }

    const onSaveContact = (contact) => {
        dispatch(saveContact(contact))
        dispatch(loadContacts())
    }

    const editContact = (id) => {
        setContact(contactService.getContactById(id))
    }

    useEffect(() => {
        dispatch(loadContacts())
    }, [])

    return (
        <  View style={styles.main}>
            <Filter onFilter={onFilter} />
            <AddContact saveContact={onSaveContact} contact={contact} />
            <ContactList contacts={contactState.contacts} editContact={editContact} removeContact={onRemoveContact} />
        </  View >
    )

}

const styles = StyleSheet.create({
    main: {
    }

});
