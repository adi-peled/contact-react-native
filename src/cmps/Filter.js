import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Filter({ onFilter }) {

    const [txt, setTxt] = useState('')
    const [filter, setFilter] = useState(
        {
            name: '',
            gold: '',
            txt: ''
        }
    )
    const [showNameSort, setNameSort] = useState(false)
    const [showGoldSort, setGoldSort] = useState(false)

    useEffect(() => {
        setFilter({ ...filter, txt })
    }, [txt])


    useEffect(() => {
        onFilter(filter)
    }, [filter])

    return (
        <  View style={styles.filter}>
            <TextInput
                style={styles.sort}
                placeholder='enter contact name'
                onChangeText={(val) => setTxt(val)}
            />
            <TouchableOpacity style={styles.sort} onPress={() => setNameSort(!showNameSort)}>
                <View style={styles.sortContainer}>
                    <Text style={styles.btn}>sort by name</Text>
                    {showNameSort && <View style={styles.sortOptions}>
                        <Text onPress={() => setFilter({ ...filter, name: 'esc' })} style={styles.option}> A-Z</Text>
                        <Text onPress={() => setFilter({ ...filter, name: 'desc' })} style={styles.option}> Z-A</Text>

                    </View>}
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sort} onPress={() => setGoldSort(!showGoldSort)}>
                <View style={styles.sortContainer} >
                    <Text style={styles.btn}>sort by gold</Text>
                    {showGoldSort && <View style={styles.sortOptions}>
                        <TouchableOpacity onPress={() => setFilter({ ...filter, gold: 'esc' })}>
                            <Text style={styles.option}> Low to High</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilter({ ...filter, gold: 'desc' })}>
                            <Text style={styles.option}> High to Low</Text>
                        </TouchableOpacity>
                    </View>}
                </View>
            </TouchableOpacity>
        </  View >
    )

}

const styles = StyleSheet.create({
    filter: {
        padding: 10,
        marginTop: 15,
        flexDirection: 'row',
        zIndex: 99,
        justifyContent: 'center',
    },
    sort: {
        position: 'relative',
        backgroundColor: '#F7F9F9',
        marginRight: 5,
        fontFamily: 'nunito-regular'

    },
    sortContainer: {
        width: '100%',
    },
    sortOptions: {
        position: 'absolute',
        top: 40,
        width: '100%',
        backgroundColor: '#F7F9F9'

    },
    option: {
        padding: 10,
        fontFamily: 'nunito-regular',
        // borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1

    },
    btn: {
        padding: 10,
        fontFamily: 'nunito-regular'

    }

});
