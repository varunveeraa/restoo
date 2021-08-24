import React from 'react'
import {View, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return(
        <View style={styles.backgroundStyle}> 
            <Ionicons name="search" style ={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search for Restaurants, Cafe and more"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#C8C8C8',
        marginTop: 15,
        height: 40,
        borderRadius: 5,
        marginHorizontal:17,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        fontSize: 17,
        marginHorizontal:9,
        flex: 1
    },
    iconStyle: {
        fontSize:27, 
        color: 'black',
        alignSelf: 'center',
        marginLeft: 10
    }
})

export default SearchBar