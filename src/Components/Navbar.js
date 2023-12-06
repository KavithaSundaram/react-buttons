import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="container-fluid navbar ps-3 pe-3 navbar-expand-lg navbar-dark bg-info">
                <div className="container-fluid">
                    <Link to="/buttons" className="navbar-brand">
                        <strong style={{ color: "#fff" }}>React Button</strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link to='/buttons' className="nav-link">
                                <li className="nav-item text-bold">
                                <strong style={{ color: "#fff" }}>Button</strong>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export { NavBar };