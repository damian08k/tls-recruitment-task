import "./header.css";

const Header = () => {
    const pageTitle = "List of planets in Star Wars!";

    return (
        <header className="header">
            <h1 className="header__page-title">{pageTitle}</h1>
        </header>
    );
};

export default Header;
