import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ContactPreview from './ContactPreview'
export default function ContactList({ contacts, removeContact, editContact }) {


    useEffect(() => {
        console.log(contacts);
    }, [])

    return (
        <  View style={styles.contactList}>
            <FlatList
                data={contacts}
                keyExtractor={(contact) => contact._id}
                renderItem={({ item }) => (
                    <ContactPreview removeContact={removeContact} editContact={editContact} contact={item} />
                )}
            />
        </  View >
    )

}

const styles = StyleSheet.create({
    contactList: {

    }

});
