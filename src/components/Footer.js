import { React } from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <h1>Maradj Fokuszban</h1>
        <div className="footer-content">
          <p>
            Szeretnel idoben ertesulni a kedvenc szallashelyeidrol? iratkozz fel
            hirlevelunkre, es ne aggodj nem szemeteljuk tele a tarhelyed ....
          </p>
        </div>
        <form>
          <label className="email">
            <input type="text" email="email" placeholder="Email cimed..." />
          </label>
          <input className="submit" type="submit" value="Kuldes" />
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
          <a href=""> Rolunk </a>
          <a href=""> Impressum </a>
          <a href=""> Felhasznalasi feltetelek </a>
        </div>

        <p className="footer-copy">...@copyright</p>
      </div>
    </footer>
  );
}

export default Footer;
