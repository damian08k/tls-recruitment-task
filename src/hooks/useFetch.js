import { useEffect, useContext } from "react";

import { DataContext } from "../context/DataContext";

const useFetch = API => {
    const { setData, setIsLoad } = useContext(DataContext);
    const abortController = new AbortController();

    const getData = async () => {
        const response = await fetch(API, { signal: abortController.signal });

        if (!response.ok) {
            const errorMessage = `An error has occuered: ${response.status}`;
            throw new Error(errorMessage);
        }

        const fetchedData = await response.json();

        setData(fetchedData.results);
        setIsLoad(true);
    };

    useEffect(() => {
        getData();

        return () => abortController.abort();
    }, []);
};

export default useFetch;
