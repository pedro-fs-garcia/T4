import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link to="/" className="navbar-brand">
                        C4P PetShop - Clientes
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/clientes" className="nav-link">Clientes</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
