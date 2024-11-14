import React from "react";
import { myUrl } from "../util/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const items = useSelector((store) => store.cart.items);
  return (
    <>
      <section className="navBar">
        <aside className="logo">
          <img height="50px" width="50px" src={myUrl} alt="app logo" />
        </aside>
        <aside className="navList">
          <ul>
            <li>
              <Link key="45" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link key="46" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link key="47" to="/aboutUs">
                About Us
              </Link>
            </li>
            <li>
              <Link key="48" to="/contactUs">
                Contact Us
              </Link>
            </li>
            <li>
              <Link key="49" to="/cart">
                Cart ({items.length} items)
              </Link>
            </li>
            <li>
              <Link key="50" to="/info/">
                Info Page
              </Link>
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
}

export default Nav;
