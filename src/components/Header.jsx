import React from "react";

const Header = () => {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="/">
        NodeJs
      </a>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <form
        className="nav col-12 col-md-auto flex-fill mb-2 justify-content-center mb-md-0"
        role="search"
        method="POST"
        action="/search"
      >
        <input
          type="search"
          name="searchTerm"
          className="form-control form-control-dark w-100 rounded-0 border-0"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
    </header>
  );
};

export default Header;