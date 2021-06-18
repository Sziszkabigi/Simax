import { React } from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <h1>Maradj Fokuszban</h1>
        <p>
          Szeretnel idoben ertesulni a kedvenc szallashelyeidrol? NE maradj
          le....
        </p>
        <form>
          <label>
            <input type="text" email="email" placeholder="Email cimed..." />
          </label>
          <input type="submit" value="Kuldes" />
        </form>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img
            className="logo-image"
            src="./assets/simax_mapmark_normal.svg"
            alt="logo"
            width="40px"
          />
        </div>
        <div className="footer-menu">
          <a href="">Rolunk</a>
          <a href="">Impressum 2</a>
          <a href="">Felhasznalasi feltetelek</a>
        </div>

        <p className="footer-copy">...@copyright</p>
      </div>
    </footer>
  );
}

export default Footer;
