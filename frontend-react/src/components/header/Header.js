import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { BiSolidLogIn } from "react-icons/bi";

// import faCodepen from "@fortawesome/fontawesome-svg-core"

const Header = () => {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogin = () => {
    // Navigate to the login page
    navigate("/login");
  };

  const navToBookingPage = () => {
    navigate("/booking");
  };

  const [isMenu1Hovered, setIsMenu1Hovered] = useState(false);
  const [isMenu2Hovered, setIsMenu2Hovered] = useState(false);
  const [isMenu3Hovered, setIsMenu3Hovered] = useState(false);
  const [isMenu4Hovered, setIsMenu4Hovered] = useState(false);

  // Function to handle hover events
  const handleMenu1Hover = () => {
    setIsMenu1Hovered(!isMenu1Hovered);
  };

  const handleMenu2Hover = () => {
    setIsMenu2Hovered(!isMenu2Hovered);
  };

  const handleMenu3Hover = () => {
    setIsMenu3Hovered(!isMenu3Hovered);
  };

  const handleMenu4Hover = () => {
    setIsMenu4Hovered(!isMenu4Hovered);
  };

  return (
    <div>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="logo">
            <a href="#" class="nav-link">
              <span class="link-text logo-text">Fades.me</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M480 128h-48l-198.94 70.46-59.13-31.59a72.16 72.16 0 10-25.69 41.47l52.2 31.72L192 277l-43.64 26.76a71.74 71.74 0 1024.79 38L480 160zm-376.52 64a40 40 0 1140-40 40 40 0 01-40 40zm0 208a40 40 0 1140-40 40 40 0 01-40 40zm152-144a16 16 0 1116-16 16 16 0 01-16 16z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M343.79 259.87l-83.74 48.18L432 368h47.99l.01-32-136.21-76.13z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              {/* <FontAwesomeIcon icon={FaAppleWhole} /> */}
            </a>
          </li>

          <li
            class="nav-item"
            onMouseEnter={handleMenu1Hover}
            onMouseLeave={handleMenu1Hover}
            onClick={navToBookingPage}
          >
            <a href="/booking" class="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="cat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M22 10H2v9a3 3 0 003 3h14a3 3 0 003-3v-9zM7 8a1 1 0 01-1-1V3a1 1 0 012 0v4a1 1 0 01-1 1zm10 0a1 1 0 01-1-1V3a1 1 0 012 0v4a1 1 0 01-1 1z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M19 4h-1v3a1 1 0 01-2 0V4H8v3a1 1 0 01-2 0V4H5a3 3 0 00-3 3v3h20V7a3 3 0 00-3-3z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              <span class="link-text">Booking</span>
            </a>
            {isMenu1Hovered && (
              <div className="absolute bg-gray-800 text-white mt-2 p-2 rounded-md w-72">
                <ul>
                  <li>
                    <a href="#">Submenu 1</a>
                  </li>
                  <li>
                    <a href="#">Submenu 2</a>
                  </li>
                  <li>
                    <a href="#">Submenu 3</a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li
            class="nav-item"
            onMouseEnter={handleMenu2Hover}
            onMouseLeave={handleMenu2Hover}
          >
            <a href="#" class="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="alien-monster"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M288 16L0 304l176 176 288-288V16zm80 128a32 32 0 1132-32 32 32 0 01-32 32z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M480 64v144L216.9 471.1 242 496l270-272V64h-32z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              <span class="link-text">Pricing</span>
            </a>
            {isMenu2Hovered && (
              <div className="absolute bg-gray-800 text-white mt-2 p-2 rounded-md">
                <ul>
                  <li>
                    <a href="#">Submenu 1</a>
                  </li>
                  <li>
                    <a href="#">Submenu 2</a>
                  </li>
                  <li>
                    <a href="#">Submenu 3</a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li
            class="nav-item"
            onMouseEnter={handleMenu3Hover}
            onMouseLeave={handleMenu3Hover}
          >
            <a href="#" class="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-station-moon-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M12 16v-4M12 8h.01"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              <span class="link-text">Info</span>
            </a>
            {isMenu3Hovered && (
              <div className="absolute bg-gray-800 text-white mt-2 p-2 rounded-md">
                <ul>
                  <li>
                    <a href="#">Submenu 1</a>
                  </li>
                  <li>
                    <a href="#">Submenu 2</a>
                  </li>
                  <li>
                    <a href="#">Submenu 3</a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* <li
            class="nav-item"
            onMouseEnter={handleMenu4Hover}
            onMouseLeave={handleMenu4Hover}
          >
            <a href="#" class="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-shuttle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                class="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              <span class="link-text">Shuttle</span>
            </a>
            {isMenu4Hovered && (
              <div className="absolute bg-gray-800 text-white mt-2 p-2 rounded-md">
                <ul>
                  <p>This is a blurp about cats</p>
                </ul>
              </div>
            )}
          </li> */}

          <li class="nav-item-login">
            <a href="#" class="nav-link">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-shuttle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M0 0h24v24H0z"
                    class="fa-primary"
                  />
                  <path
                    d="M10 11H4V3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1v-8h6v3l5-4-5-4v3z"
                    class="fa-secondary"
                  />
                </g>
              </svg>
              <button onClick={handleLogin}>Login</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
