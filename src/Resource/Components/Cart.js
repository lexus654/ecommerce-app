import styled from "styled-components";
import Content from "./Content";
import deletePic from "../images/icon-delete.svg";

const HolderAbove = styled.div`
  width: 300px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 100px;
  right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 10px 20px;
  box-shadow: -1px 12px 24px 0px rgba(0, 0, 0, 0.75);

  & .title {
    font-size: 0.8rem;
    text-align: left;
    margin: 10px;
    font-weight: bolder;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
  }
  & .product-name,
  .cart-price {
    font-size: 0.7rem;
    text-align: left;
    margin-right: 15px;
  }
  & .cart-picture {
    width: 40px;
    margin-right: 15px;
  }
  & .product-holder-row {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
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

  & .total-price {
    margin-left: 20px;
    font-weight: bolder;
  }
`;

// refactor codes in cart
// create better class names
function Cart(props) {
  console.log(props.number, "hello");

  return (
    <HolderAbove>
      <p className="title">Cart</p>
      <div className="product-holder-row">
        <img
          className="cart-picture"
          src={props.mainPicture}
          alt="pic cart"
        ></img>
        <div className="product-holder-column">
          <p className="product-name">{props.productName}</p>
          <p className="cart-price">
            ${props.price.toFixed(2)} x {props.number}
            <span className="total-price">
              ${(props.price * props.number).toFixed(2)}
            </span>
          </p>
        </div>
        <img className="delete" src={deletePic} alt="delerte"></img>
      </div>
      <button className="checkout">Check out</button>
    </HolderAbove>
  );
}

export default Cart;
