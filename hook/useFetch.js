import { useState, useEffect } from "react";
import axios from 'axios'


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState (false);
    const [error, setError] = useState(null);

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
        'X-RapidAPI-Key': 'bff1185204msh5fd247440485de6p1bea0bjsnbe97216f1daa',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query},
    };

    const fechtData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }   
    }

    useEffect (() => {
        fechtData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fechtData();
    }

    return { data, isLoading, error, refetch}
}

export default useFetch;