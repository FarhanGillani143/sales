import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { useState } from "react";
const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <Nav>
      <div className={isMenu ? "menuIcon active": "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setIsMenu(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setIsMenu(false)}
              to="/shop"
            >
              Shop
              <ul className="drop-down">
                <li>
                  <NavLink to="/hp" onClick={() => setIsMenu(false)}>
                    Hp
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dell" onClick={() => setIsMenu(false)}>
                    Dell
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/lenovo" onClick={() => setIsMenu(false)}>
                    lenovo
                  </NavLink>
                </li>
              </ul>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setIsMenu(false)}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icons"
            onClick={() => setIsMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icons"
            onClick={() => setIsMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};
const Nav = styled.nav`
.navbar-list{
    display: flex;
    gap: 4.8rem;
li{
    list-style: none;

    .navbar-link {
        text-decoration: none;
        font-size:1.8rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition:color 0.3s linear;
        &: hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
}

}
.drop-down{
  color: black;
  width: 50px;
  height: 50px;
  line-height: 62px;
  float: left;
  text-align: center;
  list-style: none;
  transition: all 0.3s linear;
  visibility: hidden;
  position: absolute;

}
 ul li :hover > .drop-down{
  visibility: visible;
 }

.mobile-navbar-btn{
  display: none;

.close-outline{
  display: none;
}
}
.mobile-navbar-btn[name="close-outline"]{
  display: none;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
.mobile-navbar-btn{
display: inline-block;
z-index: 999;
border: ${({ theme }) => theme.colors.black};

.mobile-nav-icons{
font-size: 4.2rem;
color: ${({ theme }) => theme.colors.black};

}
  }
.navbar-list{
width: 100vh;
height: 100vh;
top: 0;
left: 0;
position: absolute;
background: #fff;

display: flex;
justify-content: center;
align-items: center;

transform: translateX(100%);
li{
  .navbar-link {
        font-size:4.2rem;
        &: hover,
        &:active {
        color: ${({ theme }) => theme.colors.helper};
        }
      }
      }
      }
  .active .mobile-nav-icons{
    display: none;
    font-size: 4.2rem;
    top: 5%;
    left: 10%;
    position: absolute;
    color: ${({ theme }) => theme.colors.black};
    z-index: 999;
  }
  .active .close-outline{
    display: inline-block;
  }
  .active .navbar-list{
    visibility: visible;
    opcity: 1;
    transform: translateX(0);
    z-index: 999;
  }
}

`;

export default Navbar;
