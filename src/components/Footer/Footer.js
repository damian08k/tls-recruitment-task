import { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import { SearchbarContext } from "../../context/SearchbarContext";

import getData from "../../getData";

import "./footer.css";

const Footer = () => {
    const { data, isLoad, setData, setIsLoad } = useContext(DataContext);
    const { searchValue, setSearchValue } = useContext(SearchbarContext);

    const handleChangePage = async URL => {
        await getData(URL, setData, setIsLoad);

        if (searchValue) {
            setSearchValue("");
        }
    };

    return (
        <footer className="footer">
            <button
                disabled={!data.previous || !isLoad}
                className="footer__pagination-button"
                onClick={() => handleChangePage(data.previous)}
            >
                Prev Page
            </button>
            <button
                disabled={!data.next || !isLoad}
                className="footer__pagination-button"
                onClick={() => handleChangePage(data.next)}
            >
                Next Page
            </button>
        </footer>
    );
};

export default Footer;
