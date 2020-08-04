import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/feflix_logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="FeFlix logo" />
      </Link>

      <p>
        <a href="https://vitrine-imersao-react.vercel.app/">
          Vitrine da Imersão React da Alura
        </a>
      </p> 
      
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;