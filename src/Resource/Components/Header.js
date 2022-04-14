import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import userPhoto from "../images/image-avatar.png";
// import "./Header.css";
import styled from "styled-components";
import Cart from "./Cart";

// fixing the styles
const Holder = styled.div`
  width: 75%;
  height: 100px;
  padding: 0px 0;
  margin-bottom: 10px;
  border-bottom: hsl(223, 64%, 98%) 3px solid;

  &,
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .logo {
    width: 150px;
    cursor: pointer;
  }

  & .list-centered {
    margin-left: -250px;
  }
  & li {
    font-size: 0.9rem;
    color: hsl(220, 14%, 75%);
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
    cursor: pointer;
    margin: 0 10px;
    list-style-type: none;
  }

  & .list-end {
    display: flex;
    width: 120px;
    justify-content: space-around;
    & .cart {
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
    }
    & .userPhoto {
      width: 2.5rem;
      height: 2.5rem;
      cursor: pointer;
    }
  }
`;

function Header(props) {
  const openCart = function () {
    let style = "inline";

    if (style === "inline") {
      style = "none";
      props.passOpen(style);
    }
    if (style === "none") {
      style = "inline";
      props.passOpen(style);
    }
  };
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
        <img onClick={openCart} className="cart" src={cart} alt="cart"></img>
        <img className="userPhoto" src={userPhoto} alt="user"></img>
      </ul>
    </Holder>
  );
}

export default Header;
