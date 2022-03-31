import cartPrice from "../../images/icon-cart.svg";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;
const MainHolder = styled.div`
  text-align: left;
  width: 100%;
`;

function PriceHolder() {
  return (
    <MainHolder>
      <Holder direction="column">
        <p>
          $125.00 <span>50%</span>
        </p>
        <p> $250.00 </p>
      </Holder>
      <Holder direction="row">
        <Holder direction="row">
          <button>
            <img src={minus} alt="minus button"></img>
          </button>
          <p>0</p>
          <button>
            <img src={plus} alt="plus button"></img>
          </button>
        </Holder>
        <button>
          <img src={cartPrice} alt="add to cart"></img>
          Add to Cart
        </button>
      </Holder>
    </MainHolder>
  );
}

export default PriceHolder;
