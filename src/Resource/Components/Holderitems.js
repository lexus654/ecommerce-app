import Header from "./Header";
import react from "react";
import TextHolder from "./Body/TextHolder";
import GridPictures from "./Body/GridPictures";
import PriceHolder from "./Body/PriceHolder";
import MainPictureHolder from "./Body/MainPictureHolder";

import "./HolderItems.css";

function Holderitems() {
  return (
    <div>
      <div className="holderItems-contaner">
        <Header></Header>
        {/* columns */}
        <div>
          <MainPictureHolder></MainPictureHolder>
          <GridPictures></GridPictures>
        </div>
        <div>
          <TextHolder></TextHolder>
          <PriceHolder></PriceHolder>
        </div>
      </div>
    </div>
  );
}

export default Holderitems;
