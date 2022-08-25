import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header">
      <Link to="/" className="header__logo">LOGO</Link>
      <ul className="header__nav-list">
        <li className="header__list-item header__item-link--is-active">
          <Link to="/" className="header__item-link" >Home</Link>
        </li>
        <li className="header__list-item">
          <Link to="/login" className="header__item-link">Login</Link>
        </li>
        <li className="header__list-item">
          <Link to="/register" className="header__item-link">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
