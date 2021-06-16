import { useEffect, useContext } from "react";

import { DataContext } from "../context/DataContext";

import getData from "../getData";

const useFetch = API => {
    const { setData, setIsLoad } = useContext(DataContext);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => await getData(API, setData, setIsLoad);

        fetchData();

        return () => abortController.abort();
    }, [API, setData, setIsLoad]);
};

export default useFetch;
