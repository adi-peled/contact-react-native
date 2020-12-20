import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'
export default function ContactPreview({ contact, removeContact, editContact }) {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <TouchableOpacity onPress={() => setShowInfo(!showInfo)}>
            <  View style={styles.contactPreview}>
                <View style={styles.info}>
                    <Text><Text style={styles.detail}>Name:  </Text> {contact.name}</Text>
                    {showInfo && <View style={styles.moreInfo}>
                        <Text ><Text style={styles.detail}>Email:  </Text>{contact.email}</Text>
                        <Text ><Text style={styles.detail}>Phone:  </Text>{contact.phone}</Text>
                        <Text ><Text style={styles.detail}>Gold:  </Text>{contact.gold}</Text>
                    </View>}
                </View>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => editContact(contact._id)} >
                        <Image style={styles.editIcon}
                            source={require('../../assets/img/edit.png')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => removeContact(contact._id)} >
                        <Image style={styles.removeIcon}
                            source={require('../../assets/img/remove.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>

            </  View >
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    contactPreview: {
        padding: 30,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#E0D0C1',
        justifyContent: 'space-between',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
    detail: {
        minWidth: 80,
        fontSize: 20,
        fontFamily: 'nunito-regular'
    },
    txt: {
        fontFamily: 'nunito-regular'
    },
    iconsContainer: {
        flexDirection: 'row'
    },
    iconContainer: {
        justifyContent: 'center'

    },
    removeIcon: {
        width: 30,
        height: 10,
        marginLeft: 15,

    },
    editIcon: {
        width: 30,
        height: 30
    }


});
