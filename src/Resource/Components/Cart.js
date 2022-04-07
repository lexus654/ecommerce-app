import styled from "styled-components";
import Content from "./Content";

const HolderAbove = styled.div`
  width: 200px;
  background-color: lightblue;
  position: absolute;
  top: 100px;
  right: 100px;
`;

function Cart(props) {
  return (
    <HolderAbove>
      <p>Cart</p>
      <div>
        <p>{props.productName}</p>
        {/* <img>img</img> */}
        <p>price and quantity bill</p>
      </div>
      <button>delete</button>
      <button>Check out</button>
    </HolderAbove>
  );
}

export default Cart;
