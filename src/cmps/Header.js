import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

    return (
        <  View style={styles.header}>
            <View style={styles.nav}>
                <Text style={styles.logo}>Logo</Text>
                <View style={styles.headerLeft}>
                    <Text style={styles.item}>Contacts</Text>
                    <Text style={styles.item}>Login</Text>
                </View>
            </View>
        </  View >
    )

}

const styles = StyleSheet.create({
    header: {
        padding: 30,
        backgroundColor: '#F7F9F9',
        
    },
    nav: {
        flexDirection: 'row'
    },
    logo: {
        flex: 0.3,
        fontSize:18,
        fontFamily:'nunito-bold'
    },
    headerLeft: {
        flex: 0.7,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    item: {
        marginRight: 15,
        fontSize:18,
        fontFamily:'nunito-bold'

    }

});
