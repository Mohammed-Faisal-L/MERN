import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ data, setTempData }) {
  const [inputText, setInputText] = useState("");

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary mt-4">
      <div class="container-fluid ms-5 me-5">
        <a class="navbar-brand fw-semibold" href="#">
          Swiggy
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                to={"/"}
                className="nav-link active fw-semibold"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
          </ul>
          <input
            class="form-control w-25 me-2"
            type="text"
            value={inputText}
            placeholder="Enter Your Search"
            onChange={(event) => setInputText(event.target.value)}
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success fw-semibold"
            onClick={() => {
              let filteredData = data.filter((card) => {
                let upperCaseName = card.card
                  ? card.card.info.name.toUpperCase()
                  : card.info.name.toUpperCase();
                let upperCaseInputText = inputText.toUpperCase();
                return upperCaseName.includes(upperCaseInputText);
              });
              setTempData(filteredData);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
