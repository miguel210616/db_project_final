import React from 'react';
import logo from './images/logo.jpeg';
import './styles/Navbar.css';

class Navbar extends React.Component {
    render(){
        return <div className='Navbar'>
            <div className="container-fluid">
            <a className="Navbar__brand" href='/'>
                <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                <span className="font-weight-light" >CONSULTA DE TRAMITES </span>
                <span className="font-weinght-bold">_Y CARNÉS UNIVERSITARIO</span>
            </a>
            </div>
        </div>;
    }
}

export default Navbar;