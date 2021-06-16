const getData = async (API, setData, setIsLoad) => {
    setIsLoad(false);
    try {
        const response = await fetch(API);

        if (!response.ok) {
            const errorMessage = `An error has occurred: ${response.status}`;
            throw new Error(errorMessage);
        }

        const fetchedData = await response.json();

        setData(fetchedData);
        setIsLoad(true);
    } catch (error) {
        console.error(error);
    }
};

export default getData;
