import { React } from "react";

function Header() {
  return (
    <header>
      <logo>
        <img
          className="logo-image"
          src="./assets/simax_mapmark_normal.svg"
          alt="logo"
          width="40px"
        />
        <span>Simax </span>
      </logo>
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <a className="menu-link" href="" target="_self" title="FOOLDAL">
              FOOLDAL{" "}
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="" target="" title="SITEREPEK">
              SITEREPEK{" "}
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="" target="" title="TUDNIVALOK ">
              TUDNIVALOK{" "}
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="" target="" title="BIZTOSITAS">
              BIZTOSITAS{" "}
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="" target="_self" title="BIZTOSITAS">
              BIZTOSITAS{" "}
            </a>
          </li>
        </ul>
      </nav>
      <div className="hero-content">
        <h1>Szuperieur lejtok </h1>
        <h1>Szuperieur aron. </h1>
        <p> Csuszik a francia? Sielj velunk!</p>
      </div>
    </header>
  );
}

export default Header;
