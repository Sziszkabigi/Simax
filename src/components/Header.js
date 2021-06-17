import { React } from "react";

function Header() {
  return (
    <header>
      <logo>
        <img src="./assets/simax_mapmark_normal.svg" alt="logo" width="40px" />
        <span>Simax </span>
      </logo>
      <nav>
        <ul className="menu">
          <li className="menu-item"> 1 </li>
          <li className="menu-item"> 2 </li>
          <li className="menu-item"> 3 </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
