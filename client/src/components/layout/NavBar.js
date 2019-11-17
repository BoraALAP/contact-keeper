import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import authContext from "../../context/auth/authContext";
import contactContext from "../../context/contact/contactContext";

const NavBar = ({ title, icon }) => {
  const { isAuthenticated, logout, user } = useContext(authContext);
  const {clearContacts} = useContext(contactContext)
  const onLogout = () => {
    logout()
    clearContacts()
  }

  const authLinks = (
    <Fragment>
    <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} to="#!"><i className="fas fa-sign-out-alt"/> <span className="hide-sm">Log Out</span></a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </Fragment>
  );
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

NavBar.ProtoTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

NavBar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt"
};

export default NavBar;
