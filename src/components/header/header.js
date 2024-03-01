import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'
import Logo from '../../assets/avatar_2_the_way_of_water_logo_png_hd_2022_by_andrewvm_deoszau-pre.png';

function Header(){

    return (
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Contatos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                </ul>
            </nav>
        </header >
    )
}

export default Header;