import styled from "styled-components";
import Content from "./Content";
import deletePic from "../images/icon-delete.svg";
import Product from "./Product";
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

  & .product-holder-row {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
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
        <Product
          mainPicture={props.mainPicture}
          productName={props.productName}
          number={props.number}
          price={props.price}
        ></Product>
        <img className="delete" src={deletePic} alt="delerte"></img>
      </div>
      <button className="checkout">Check out</button>
    </HolderAbove>
  );
}

export default Cart;
