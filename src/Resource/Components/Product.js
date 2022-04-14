import styled from "styled-components";
import Content from "./Content";
import deletePic from "../images/icon-delete.svg";

const HolderNew = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  & .product-name,
  .cart-price {
    font-size: 0.7rem;
    text-align: left;
    margin-right: 15px;
  }
  & .cart-picture {
    width: 40px;
    margin-right: 15px;
    border-radius: 5px;
  }

  & .product-holder-column {
    display: flex;
    flex-direction: column;
  }

  & .total-price {
    margin-left: 20px;
    font-weight: bolder;
  }
`;
function Product(props) {
  return (
    <HolderNew>
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
    </HolderNew>
  );
}

export default Product;
