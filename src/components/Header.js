import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { authActions } from "../store/index";

//

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Redux Auth</h1>

      {/* Mid - Large Screen */}
      {isAuth && (
        <nav className={classes.navBar}>
          <ul className={classes.lgMenu}>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}

      <div className={classes.mobileMenu}>
        <GiHamburgerMenu className={classes.mobileMenuIcon} />
      </div>
    </header>
  );
};

export default Header;
