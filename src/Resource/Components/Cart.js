import styled from "styled-components";
import Content from "./Content";

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
  & .product-name {
    font-size: 0.7rem;
  }
`;

function Cart(props) {
  const amount = 2;
  return (
    <HolderAbove>
      <p className="title">Cart</p>
      <div className="product-holder">
        <p className="product-name">{props.productName}</p>
        {/* <img src={props.mainPicture}></img> */}
        <p>
          {props.price} x {amount} {props.price * amount}
        </p>
        <button>delete</button>
      </div>
      <button>Check out</button>
    </HolderAbove>
  );
}

export default Cart;
