import mainPicture from "../../images/image-product-1.jpg";

// Styling compones
function MainPictureHolder() {
  return (
    <img
      style={{ width: "300px" }}
      className="mainProduct picture"
      src={mainPicture}
      alt="Main product"
    ></img>
  );
}

export default MainPictureHolder;
