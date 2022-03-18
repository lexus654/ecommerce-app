import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import userPhoto from "../images/image-avatar.png";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="logo"></img>
      <ul className="list-centered">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className="list-end">
        <img className="cart" src={cart} alt="cart"></img>
        <img className="userPhoto" src={userPhoto} alt="user"></img>
      </ul>
    </div>
  );
}

export default Header;
