import Header from "./Header";

import TextHolder from "./Body/TextHolder";
import GridPictures from "./Body/GridPictures";
import PriceHolder from "./Body/PriceHolder";
import MainPictureHolder from "./Body/MainPictureHolder";
import styled from "styled-components";

// refactor
const HolderColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 40vw;
`;

function Content() {
  return (
    <div className="holderItems-main-container">
      <Header></Header>
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {/* columns */}
        <HolderColumn>
          <MainPictureHolder></MainPictureHolder>
          <GridPictures></GridPictures>
        </HolderColumn>
        <HolderColumn>
          <TextHolder></TextHolder>
          <PriceHolder></PriceHolder>
        </HolderColumn>
      </div>
    </div>
  );
}

export default Content;
