import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">SICAPOL</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">Inicio</Link>               
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        RRHH
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/funcionario">Funcionario</Link>
                    </div>
                </li>
                
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Actas
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/actas">Actas Policiales</Link>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Servicios
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/comunitarias">Labor Comunitaria</Link>
                        <Link className="dropdown-item" to="/internas">Labor Interna</Link>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        HRH
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/homicidios">Homicidios</Link>
                        <Link className="dropdown-item" to="/robos">Robos</Link>
                        <Link className="dropdown-item" to="/hurtos">Hurtos</Link>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Administrador
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/usuarios">Usuarios</Link>
                        <Link className="dropdown-item" to="/respaldos">Backup</Link>
                        <Link className="dropdown-item" to="/salir">Salir</Link>
                    </div>
                </li>                
            </div>
        </div>
    </nav>
)