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

const Holder = styled.div`
  display: flex;
  justify-content: space-around;
`;

function Content() {
  return (
    <div className="holderItems-main-container">
      <Header></Header>
      <Holder>
        <HolderColumn>
          <MainPictureHolder></MainPictureHolder>
          <GridPictures></GridPictures>
        </HolderColumn>
        <HolderColumn style={{ width: "30vw", marginLeft: "-500px" }}>
          <TextHolder></TextHolder>
          <PriceHolder></PriceHolder>
        </HolderColumn>
      </Holder>
    </div>
  );
}

export default Content;
