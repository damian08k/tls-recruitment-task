import { useContext } from "react";

import { DataContext } from "../../context/DataContext";

import getData from "../../getData";

import "./footer.css";

const Footer = () => {
    const { data, setData, setIsLoad } = useContext(DataContext);

    const handleChangePage = async URL => {
        await getData(URL, setData, setIsLoad);
    };

    return (
        <footer className="footer">
            <button className="footer__pagination-button" onClick={() => handleChangePage(data.previous)}>
                Prev Page
            </button>
            <button className="footer__pagination-button" onClick={() => handleChangePage(data.next)}>
                Next Page
            </button>
        </footer>
    );
};

export default Footer;
