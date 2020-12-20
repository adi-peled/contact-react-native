import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactList from './ContactList'
import Filter from './Filter'
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts, removeContact, addContact } from '../actions/contactAction';
import AddContact from './AddContact'
export default function Main() {

    const dispatch = useDispatch()
    const contactState = useSelector(state => state.contact)

    const onFilter = (filter) => {
        dispatch(loadContacts(filter))
    }


    const onRemoveContact = (id) => {
        dispatch(removeContact(id))
    }

    const onAddContact = (contact) => {
        dispatch(addContact(contact))

    }

    useEffect(() => {
        dispatch(loadContacts())
    }, [])

    return (
        <  View style={styles.main}>
            <Filter onFilter={onFilter} />
            <AddContact addContact={onAddContact} />
            <ContactList contacts={contactState.contacts} removeContact={onRemoveContact} />
        </  View >
    )

}

const styles = StyleSheet.create({
    main: {
    }

});
