import './Header.scss'
import { useProductContext } from "@/Context/ProductContext";
import {Link} from 'react-router-dom'

const Header = () => {
  const context = useProductContext();

  const handleSearch = (e) => {
    context.setSearch(e.target.value);
  };
  return (
    <>
      <nav className="header">
        <Link to="/" className="header__logo">
          LOGO
        </Link>
        <input
          type="search"
          onChange={handleSearch}
          placeholder="Busca un producto"
        />
        <ul className="header__nav-list">
          <li className="header__list-item header__item-link--is-active">
            <Link to="/" className="header__item-link">
              Home
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="/products" className="header__item-link">
              Lista de productos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
