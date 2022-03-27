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
      <div className="">
        {/* columns */}
        <div className="holderItems-column-container">
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
