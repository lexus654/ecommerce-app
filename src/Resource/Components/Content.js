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
  align-items: center;
  flex-direction: row;
`;

const MainHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Content() {
  return (
    <MainHolder>
      <Header></Header>
      <Holder>
        <HolderColumn>
          <MainPictureHolder></MainPictureHolder>
          <GridPictures></GridPictures>
        </HolderColumn>
        <HolderColumn>
          <TextHolder></TextHolder>
          <PriceHolder></PriceHolder>
        </HolderColumn>
      </Holder>
    </MainHolder>
  );
}

export default Content;
