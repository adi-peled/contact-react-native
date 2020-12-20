import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Footer() {

    return (
        <  View style={styles.footer}>
            <Text>
                {/* <Image style={styles.linkedinImg} source={require('../../assets/img/linkedin.png')}></Image> */}
            </Text>
        </  View >
    )

}

const styles = StyleSheet.create({
    footer: {
        padding: 15,
        backgroundColor: '#F7F9F9'
    },
    profileImg: {
        width: 100,
        height: 100
    },
    linkedinImg:{
        width: 70,
        height: 70
    }

});
