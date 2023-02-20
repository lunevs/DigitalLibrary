import React from "react";
import {Link} from "react-router-dom";

const TopMenu = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
                <div className="container-fluid">
                    <Link to={`/`} className="navbar-brand">Digital Library</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/books/`}>Books list</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/book_add/`}>Add book</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href={`/`} role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Users menu
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={`profile/`}>My profile</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to={`user_add/`}>add user</Link></li>
                                    <li><Link className="dropdown-item" to={`users/`}>users list</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex w-25" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search a book" aria-label="Search" />
                            <button className="btn btn-outline-success w-50" type="submit">Find</button>
                        </form>
                    </div>
                </div>
            </nav>
    )
}

export default TopMenu;
