import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
export default function AddContact({ saveContact, contact }) {

    const [showAdd, setShow] = useState(false)
    const [editedContact, setEditedContact] = useState(
        {
            _id: '',
            name: '',
            email: '',
            phone: '',
            gold: ''
        }
    )

    useEffect(() => {
        if (contact) {
            setEditedContact(contact)
        }
    }, [contact])

    const onAddContact = () => {
        if (!editedContact.name || !editedContact.email || !editedContact.phone || !editedContact.gold) {
            Alert.alert(' Fill all inputs', 'you must fill all inputs', [
                { text: 'understood', onPress: () => console.log('alert close') }
            ])
            return
        }
        saveContact(editedContact)
        setEditedContact({
            _id: '',
            name: '',
            email: '',
            phone: '',
            gold: ''
        })
    }


    return (
        <  View style={styles.addContact}>
            <TouchableOpacity onPress={() => setShow(!showAdd)}>
                <View style={styles.btn} >

                    <Text style={styles.txt} >Add contact</Text>
                </View>
            </TouchableOpacity>
            {showAdd && <View style={styles.form}>
                <TextInput style={styles.input} value={editedContact.name} placeholder="enter name"
                 onChangeText={(val) => setEditedContact({ ...editedContact, name: val })} />
                <TextInput style={styles.input} value={editedContact.email} placeholder="enter email"
                 onChangeText={(val) => setEditedContact({ ...editedContact, email: val })} />
                <TextInput style={styles.input} value={editedContact.phone} keyboardType="numeric" placeholder="enter phone number"
                 onChangeText={(val) => setEditedContact({ ...editedContact, phone: val })} />
                <TextInput style={styles.input} value={editedContact.gold} keyboardType="numeric" placeholder="enter gold"
                 onChangeText={(val) => setEditedContact({ ...editedContact, gold: val })} />

                <TouchableOpacity onPress={() => onAddContact()} >
                    <View style={styles.btn} >
                        <Text style={styles.txt} >Save Contact</Text>
                    </View>
                </TouchableOpacity>
            </View>}

        </  View >
    )

}

const styles = StyleSheet.create({
    addContact: {
        padding: 30,
    },
    form: {

    },
    input: {
        backgroundColor: '#F7F9F9',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        borderStyle: 'solid',
        fontFamily: 'nunito-regular'
    },
    txt: {
        fontFamily: 'nunito-regular',
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#F7F9F9',
        padding: 5
    }

});
