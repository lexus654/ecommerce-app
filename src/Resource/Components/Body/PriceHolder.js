import cartPrice from "../../images/icon-cart.svg";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  width: 100%;
  & .price {
    color: black;
    font-size: 1.5rem;
  }
  & .discount {
    color: hsl(26, 100%, 55%);
    padding: 1px 6px;
    background-color: hsl(25, 100%, 94%);
    font-weight: bolder;
    font-size: 0.9rem;
    border-radius: 20%;
    position: relative;
    bottom: 2px;
    left: 5px;
  }
  & .original-price {
    margin-top: 6px;
    margin-bottom: 30px;
    font-size: 1rem;
    font-weight: bolder;
    color: hsl(219, 9%, 45%);
    text-decoration: line-through;
  }
  /* buttons */
  & .quantityButton {
    width: 50px;
    height: 50px;
    border: none;
    background-color: hsl(223, 64%, 98%);
    & img {
      width: 15px;
    }
  }
  & .quantity {
    background-color: hsl(223, 64%, 98%);
    text-align: center;
    padding: 10px;
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
    font-weight: bold;
  }
  & .cartButton {
    background-color: hsl(26, 100%, 55%);
    border: none;
    border-radius: 10px;
    width: 500px;
    height: 50px;
    color: hsl(223, 64%, 98%);
    font-weight: bold;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      filter: invert(20%) sepia(3%) saturate(99%) hue-rotate(24deg)
        brightness(119%) contrast(100%);
      font-weight: bolder;
      margin-right: 10px;
    }
  }
`;
const MainHolder = styled.div`
  text-align: left;
  width: 75%;
`;

function PriceHolder() {
  return (
    <MainHolder>
      <Holder direction="column">
        <h1 className="price">
          $125.00 <span className="discount">50%</span>
        </h1>
        <p className="original-price"> $250.00 </p>
      </Holder>
      <Holder direction="row">
        <Holder direction="row">
          <button className="quantityButton">
            <img src={minus} alt="minus button"></img>
          </button>
          <p className="quantity">0</p>
          <button className="quantityButton">
            <img src={plus} alt="plus button"></img>
          </button>
        </Holder>
        <button className="cartButton">
          <img src={cartPrice} alt="add to cart"></img>
          Add to Cart
        </button>
      </Holder>
    </MainHolder>
  );
}

export default PriceHolder;
