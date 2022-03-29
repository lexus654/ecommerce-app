import cartPrice from "../../images/icon-cart.svg";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
`;

function PriceHolder() {
  return (
    <div>
      {/* price holder div */}
      <div className="price-holder">
        <p>
          $125.00 <span>50%</span>
        </p>
        <p className="original-price"> $250.00 </p>
      </div>
      {/* buttons and sliders div */}
      <Holder>
        <Holder className="slider">
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
    </div>
  );
}

export default PriceHolder;
