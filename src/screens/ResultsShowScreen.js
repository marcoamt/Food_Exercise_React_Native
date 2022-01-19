import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) =>{
    const [result, setResult] = useState(null); //per un oggetto di default mettiamo null
    //prendere il valore passato nella navigation
    const id = navigation.getParam('id');

    const getResult = async(id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, [])

    //check if there is no error messages
    if (!result){
        return null;
    }

    return (
        <View>
            <Text>{result.name} </Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) =>{
                   return <Image style = {styles.image} source={{uri: item}}/>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;