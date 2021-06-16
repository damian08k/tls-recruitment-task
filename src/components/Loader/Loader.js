import "./loader.css";

const Loader = () => {
    return (
        <div className="loader">
            <p className="loader__info">Loading... Please wait...</p>
            <div className="loader__loading"></div>
        </div>
    );
};

export default Loader;
