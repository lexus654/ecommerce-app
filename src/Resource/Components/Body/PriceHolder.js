function PriceHolder() {
  return (
    <div>
      {/* price holder div */}
      <div className="price-holder">
        <p>
          Price <span>discount</span>
        </p>
        <p className="original-price"></p>
      </div>
      {/* buttons and sliders div */}
      <div>
        <div className="slider">
          <button>+</button>
          <p>0</p>
          <button>-</button>
        </div>
      </div>
    </div>
  );
}

export default PriceHolder;
