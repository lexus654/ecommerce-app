import cartPrice from "../../images/icon-cart.svg";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import styled from "styled-components";

const HolderRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const HolderColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainHolder = styled.div`
  text-align: left;
  width: 100%;
`;

function PriceHolder() {
  return (
    <MainHolder>
      <HolderColumn>
        <p>
          $125.00 <span>50%</span>
        </p>
        <p> $250.00 </p>
      </HolderColumn>
      <HolderRow>
        <HolderRow>
          <button>
            <img src={minus} alt="minus button"></img>
          </button>
          <p>0</p>
          <button>
            <img src={plus} alt="plus button"></img>
          </button>
        </HolderRow>
        <button>
          <img src={cartPrice} alt="add to cart"></img>
          Add to Cart
        </button>
      </HolderRow>
    </MainHolder>
  );
}

export default PriceHolder;
