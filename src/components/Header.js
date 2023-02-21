import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

//

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Redux Auth</h1>

      {/* Mid - Large Screen */}

      <nav className={classes.navBar}>
        <ul className={classes.lgMenu}>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
      <div className={classes.mobileMenu}>
        <GiHamburgerMenu className={classes.mobileMenuIcon} />
      </div>
    </header>
  );
};

export default Header;
