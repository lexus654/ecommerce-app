import mainPicture from "../../images/image-product-1-thumbnail.jpg";

// Styling compones
function MainPictureHolder() {
  return (
    <img
      className="mainProduct picture"
      src={mainPicture}
      alt="Main product"
    ></img>
  );
}

export default MainPictureHolder;
