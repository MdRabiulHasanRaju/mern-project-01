import React, { useEffect } from "react";
import { NavLink, useLocation  } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

function Navbar() {
  const { isLoggedin } = useAuth();
  const location = useLocation();
   useEffect(() => {
    // Navbar collapse বন্ধ করো route change হলে
    const navbar = document.getElementById("navbarSupportedContent");
    const bsCollapse = bootstrap.Collapse.getInstance(navbar); // Bootstrap 5 API

    if (bsCollapse) {
      bsCollapse.hide();
    }
  }, [location]);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src="/images/logo-mern.png" width={120} alt="logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                {isLoggedin ? (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/dashboard">
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/logout">
                        Logout
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/registration">
                        Registration
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
