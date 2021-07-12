import React from "react";
import about from "../../assets/images/nav-images/about2.png";
import contact from "../../assets/images/nav-images/contact2.png";
import projects from "../../assets/images/nav-images/projects2.png";
import '../../index.css';

function Nav(props) {
  const navLinks = [
    {
      navLink: "About",
      image: about,
    },
    {
      navLink: "Contact",
      image: contact,
    },
    {
      navLink: "Projects",
      image: projects,
    },
  ];

  return (
    <header>
      <nav className="navbar navbar-nav navbar-expand-md navbar-expand-lg navbar-light text-center">
        <div className="container-fluid justify-content-center text-center">
          <div
            className="collapse navbar-collapse"
            data-parent="#selector"
            id="navbarToggler"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.navLink}>
                  <a
                    href={"#" + link.navLink.toLowerCase()}
                    onClick={() => props.setCurrentPage(link)}
                    className={
                      props.currentPage === link
                        ? "nav-link active nav-image"
                        : "nav-link nav-image"
                    }
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    <img
                      src={link.image}
                      alt={link.NavLink}
                      className="img-collapse"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;