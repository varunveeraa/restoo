import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native'
import yelp from '../api/yelp'

const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id') 
    const [result, setResult] = useState(null)

    console.log(result)

    const getResult = async id => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={photo => photo }
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                } }
            />
            <Text style={styles.text}>{result.phone}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 180,
        width: 350,
        marginTop: 10,
        alignSelf: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop:10
    },
    text: {
        fontSize: 18,
        marginBottom:20,
        alignSelf: 'center',
        backgroundColor: '#A9A9A9',
        width: 150,
        height: 30,
        borderRadius: 4,
        paddingLeft: 12,
        paddingTop: 3
    }
})

export default ResultShowScreen