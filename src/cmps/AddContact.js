import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
export default function AddContact({ addContact }) {

    const [showAdd, setShow] = useState(false)
    const [contact, setContact] = useState(
        {
            _id: '',
            name: '',
            email: '',
            phone: '',
            gold: ''
        }
    )

    const onAddContact = () => {
        setContact({ ...contact, _id: Math.random() })
        if (!contact.name || !contact.email || !contact.phone || !contact.gold) {
            Alert.alert(' Fill all inputs', 'you must fill all inputs', [
                { text: 'understood', onPress: () => console.log('alert close') }
            ])
            return
        }
        addContact(contact)
        setContact({
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
                <TextInput style={styles.input} value={contact.name} placeholder="enter name" onChangeText={(val) => setContact({ ...contact, name: val })} />
                <TextInput style={styles.input} value={contact.email} placeholder="enter email" onChangeText={(val) => setContact({ ...contact, email: val })} />
                <TextInput style={styles.input} value={contact.phone} keyboardType="numeric" placeholder="enter phone number" onChangeText={(val) => setContact({ ...contact, phone: val })} />
                <TextInput style={styles.input} value={contact.gold} keyboardType="numeric" placeholder="enter gold" onChangeText={(val) => setContact({ ...contact, gold: val })} />

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
