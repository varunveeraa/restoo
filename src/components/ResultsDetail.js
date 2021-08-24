import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

const ResultsDetail = ({ result }) => {
    return ( 
    <View style={styles.container}>
        <Image 
            style={styles.image}
            source={{uri: result.image_url}}
        />
        <Text style = {styles.name}>{result.name}</Text>
        <Text>{result.rating} ⭐ ({result.review_count}) </Text>
    </View> )
}

const styles = StyleSheet.create({
    container: {
        marginLeft:17
    },

    image: {
        width: 200,
        height: 120,
        borderRadius: 4,
        marginBottom: 3
    },
    name: {
        fontWeight: '700',
        fontSize: 16,
    }
})

export default ResultsDetail