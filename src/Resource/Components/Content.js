import Header from "./Header";
import TextHolder from "./Body/TextHolder";
import GridPictures from "./Body/GridPictures";
import PriceHolder from "./Body/PriceHolder";
import MainPictureHolder from "./Body/MainPictureHolder";
import styled from "styled-components";
import Cart from "./Cart";
// pictures
import mainPicture from "../images/image-product-1.jpg";
import gridPicture1 from "../images/image-product-1.jpg";
import gridPicture2 from "../images/image-product-2.jpg";
import gridPicture3 from "../images/image-product-3.jpg";
import gridPicture4 from "../images/image-product-4.jpg";
// pictures
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

const sneaker = {
  tagline: "SNEAKER COMPANY",
  productName: "Fall Limited Edition Sneakers",
  description: `These low-profile sneakers are your perfect casual wear companion.
Featuring a durable rubber outer sole, they'll withstand everything the
weather can offer`,
  price: 125.0,
  discount: 50,
  mainPicture: mainPicture,
  gridPicture1: gridPicture1,
  gridPicture2: gridPicture2,
  gridPicture3: gridPicture3,
  gridPicture4: gridPicture4,
};

function Content() {
  return (
    <MainHolder>
      <Cart
        title={sneaker.title}
        productName={sneaker.productName}
        mainPicture={sneaker.gridPicture1}
        price={sneaker.price}
      ></Cart>
      <Header></Header>
      <Holder>
        <HolderColumn>
          <MainPictureHolder
            mainPicture={sneaker.gridPicture1}
          ></MainPictureHolder>
          <GridPictures
            gridPicture1={sneaker.gridPicture1}
            gridPicture2={sneaker.gridPicture2}
            gridPicture3={sneaker.gridPicture3}
            gridPicture4={sneaker.gridPicture4}
          ></GridPictures>
        </HolderColumn>
        <HolderColumn>
          <TextHolder
            title={sneaker.title}
            productName={sneaker.productName}
            description={sneaker.description}
          ></TextHolder>
          <PriceHolder
            price={sneaker.price}
            discount={sneaker.discount}
          ></PriceHolder>
        </HolderColumn>
      </Holder>
    </MainHolder>
  );
}

export default Content;
