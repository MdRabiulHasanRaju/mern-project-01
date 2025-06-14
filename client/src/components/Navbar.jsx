import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Navbar.css";

function Navbar() {
  const { isLoggedin } = useAuth();
  const location = useLocation();
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    const collapseElement = navbarCollapseRef.current;
    if (!collapseElement) return;
    const bsCollapse = window.bootstrap?.Collapse.getInstance(collapseElement);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  }, [location]);

  const navLinkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/images/logo-mern.png"
              width={120}
              alt="logo"
              className="navbar-logo"
            />
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
            ref={navbarCollapseRef}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className={navLinkClass} end>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/services" className={navLinkClass}>
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>

              {isLoggedin ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/dashboard" className={navLinkClass}>
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/logout" className={navLinkClass}>
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className={navLinkClass}>
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/registration" className={navLinkClass}>
                      Registration
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

            <form
              className="d-flex custom-search-form"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
              />
              <button className="btn btn-primary ms-2" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
