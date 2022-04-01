import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import userPhoto from "../images/image-avatar.png";
// import "./Header.css";
import styled from "styled-components";

const Holder = styled.div`
  width: 80%;
  height: 100px;
  background-color: aqua;
  padding: 0px 60px;
  &,
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .logo {
    width: 150px;
  }

  & .list-centered{
    margin-left:-200px
  }
  & li {
    font-size: 0.9rem
    color: gray;
    cursor: pointer;
    margin: 0 10px;
    list-style-type: none;
  }
  & .cart,
  .userPhoto {
    height: 35px;
    width: 35px;
  }

  & .list-end {
    display: flex;
    width: 100px;
    justify-content: space-between;
  }
`;

function Header() {
  return (
    <Holder>
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
    </Holder>
  );
}

export default Header;
