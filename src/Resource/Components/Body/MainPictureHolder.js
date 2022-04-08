import Content from "../Content";
// Styling compones
function MainPictureHolder(props) {
  return (
    <img
      style={{ width: "350px", borderRadius: "10px", marginBottom: "20px" }}
      className="mainProduct picture"
      src={props.mainPicture}
      alt="Main product"
    ></img>
  );
}

export default MainPictureHolder;
