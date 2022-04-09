import styled from "styled-components";
import Content from "./Content";
import deletePic from "../images/icon-delete.svg";

const HolderAbove = styled.div`
  width: 250px;
  background-color: lightblue;
  position: absolute;
  top: 100px;
  right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .title {
    font-size: 0.8rem;
    text-align: left;
    margin: 10px;
    font-weight: bolder;
  }
  & .product-name,
  .cart-price {
    font-size: 0.7rem;
    text-align: left;
  }
  & .cart-picture {
    width: 40px;
  }
  & .product-holder {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  & .product-holder-column {
    display: flex;
    flex-direction: column;
  }
  & .delete {
    width: 19px;
    height: 19px;
  }

  & .checkout {
    background-color: hsl(26, 100%, 55%);
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 40px;
    color: hsl(223, 64%, 98%);
    font-weight: bold;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Cart(props) {
  const amount = 2;
  return (
    <HolderAbove>
      <p className="title">Cart</p>
      <div className="product-holder">
        <img
          className="cart-picture"
          src={props.mainPicture}
          alt="pic cart"
        ></img>
        <div className="product-holder-column">
          <p className="product-name">{props.productName}</p>
          <p className="cart-price">
            {props.price} x {amount} {props.price * amount}
          </p>
        </div>
        <img className="delete" src={deletePic} alt="delerte"></img>
      </div>
      <button className="checkout">Check out</button>
    </HolderAbove>
  );
}

export default Cart;
