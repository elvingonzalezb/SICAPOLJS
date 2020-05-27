import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">SICAPOL</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/">Sistema 
                    <span className="sr-only">(current)</span>
                </Link>
                <Link className="nav-item nav-link" to="/categoria">Categoria</Link>
                <Link className="nav-item nav-link" to="/producto">Productos</Link>
                <Link className="nav-item nav-link" to="/nosotros">Nosotros</Link>
                <Link className="nav-item nav-link" to="/usuario">Usuario</Link>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Funcionario
                </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/">Consultar</Link>
                        <Link className="dropdown-item" to="/registrar-funcionario">Registrar</Link>
                    </div>
                </li>
            </div>
        </div>
    </nav>
)