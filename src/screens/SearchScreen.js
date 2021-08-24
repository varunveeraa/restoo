import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMsg] = useResults('')

    const filteredResultsByPrice = (price) => {
        return results.filter( result => {
            return result.price === price
        })
    }

    return(
        <> 
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />

            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ScrollView>
                <ResultsList 
                    title='Cost Effective'
                    results = {filteredResultsByPrice('$')}
                />
                <ResultsList 
                    title='Bit Pricier'
                    results = {filteredResultsByPrice('$$')}
                />
                <ResultsList 
                    title='Big Spender'
                    results = {filteredResultsByPrice('$$$')}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen