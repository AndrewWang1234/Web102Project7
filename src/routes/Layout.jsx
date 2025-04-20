import {Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
        <div className="layout-wrapper">
            <nav>
                <ul>
                    <li className="home-link" key="home-button">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="create-link" key="createPage-button">
                        <Link to="/create">
                            Create a Crewmate
                        </Link>
                    </li>
                    <li className="gallery-link" key="galleryPage-button">
                        <Link to="/gallery">
                            Crewmate Gallery
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout;