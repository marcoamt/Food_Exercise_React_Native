import React, {useState} from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

//useEffect è un hook/funzione che consente di eseguire un frammento di codice una sola volta quando il componente viene visualizzato a schermo

const SearchScreen = ({}) => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) =>{
        // price === '$' || '$$' || '$$$'

        return results.filter( result =>{
            return result.price === price;
        });
    };
    
    return (
        //flex: 1 permette di riempire la view in modo da non tagliare quando si scrolla
        // <View style = {{flex: 1}}> 
        <>
            <SearchBar 
                term = {term} 
                onTermChange = {setTerm}
                onTermSubmit={() => {searchApi(term)}}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    title = "Cost Effective" 
                    results = {filterResultsByPrice('$')}
                    // navigation = {navigation}
                />
                <ResultsList 
                    title = "Bit Pricier" 
                    results = {filterResultsByPrice('$$')}
                    // navigation = {navigation}
                />
                <ResultsList 
                    title = "Big Spender" 
                    results = {filterResultsByPrice('$$$')}
                    // navigation = {navigation}
                />
            </ScrollView>
        </>
        // </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;