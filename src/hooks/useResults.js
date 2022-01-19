import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () =>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                //params for querystring
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: 'roma'
                }
            });
            setResults(response.data.businesses);
        }
        catch(err){
            console.log(err);
            setErrorMessage('Something went wrong')
        }
    };

    //call search api when component is first rendered
    //searchApi('pasta') ---> BAD CODE!!!! perchè in questo modo entriamo in un loop visto che il componente viene ricaricato ogni volta -> da usare l'hook useEffect
    useEffect(() =>{
        searchApi('pasta');
    },[]) //questa sintassi dello useEffect fa partire la searchApi solo la prima volta che viene caricata la view

    return [searchApi, results, errorMessage];
};