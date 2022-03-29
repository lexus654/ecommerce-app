import gridPicture1 from "../../images/image-product-1.jpg";
import gridPicture2 from "../../images/image-product-2.jpg";
import gridPicture3 from "../../images/image-product-3.jpg";
import gridPicture4 from "../../images/image-product-4.jpg";
import styled from "styled-components";

const Holder = styled.ul`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

function GridPictures() {
  return (
    <Holder>
      <img style={{ width: "60px" }} src={gridPicture1} alt="1st"></img>
      <img style={{ width: "60px" }} src={gridPicture2} alt="2nd"></img>
      <img style={{ width: "60px" }} src={gridPicture3} alt="3rd"></img>
      <img style={{ width: "60px" }} src={gridPicture4} alt="4th"></img>
    </Holder>
  );
}

export default GridPictures;
