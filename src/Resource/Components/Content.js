import Header from "./Header";

import TextHolder from "./Body/TextHolder";
import GridPictures from "./Body/GridPictures";
import PriceHolder from "./Body/PriceHolder";
import MainPictureHolder from "./Body/MainPictureHolder";

import "./Content.css";
// push mo
function Content() {
  return (
    <div className="holderItems-main-container">
      <Header></Header>
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {/* columns */}
        <div
          className="holderItems-column-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <MainPictureHolder></MainPictureHolder>
          <GridPictures></GridPictures>
        </div>
        <div className="holderItems-column-container">
          <TextHolder></TextHolder>
          <PriceHolder></PriceHolder>
        </div>
      </div>
    </div>
  );
}

export default Content;
