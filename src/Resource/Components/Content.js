import Header from "./Header";

import TextHolder from "./Body/TextHolder";
import GridPictures from "./Body/GridPictures";
import PriceHolder from "./Body/PriceHolder";
import MainPictureHolder from "./Body/MainPictureHolder";
import styled from "styled-components";
import Cart from "./Cart";

// refactor
const HolderColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 38vw;
  margin-right: -30px;
  margin-left: -30px;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

const MainHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const title = "SNEAKER COMPANY";
const productName = "Fall Limited Edition Sneakers";
const description = `These low-profile sneakers are your perfect casual wear companion.
Featuring a durable rubber outer sole, they'll withstand everything the
weather can offer`;
function Content() {
  return (
    <MainHolder>
      <Cart title={title} productName={productName}></Cart>
      <Header></Header>
      <Holder>
        <HolderColumn>
          <MainPictureHolder></MainPictureHolder>
          <GridPictures></GridPictures>
        </HolderColumn>
        <HolderColumn>
          <TextHolder
            title={title}
            productName={productName}
            description={description}
          ></TextHolder>
          <PriceHolder></PriceHolder>
        </HolderColumn>
      </Holder>
    </MainHolder>
  );
}

export default Content;
