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
        <p>valami 1</p>
        <p>valami 2</p>
        <p>valami 3</p>
      </div>
    </footer>
  );
}

export default Footer;
