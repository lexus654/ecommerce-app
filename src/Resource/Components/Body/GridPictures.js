import gridPicture1 from "../../images/image-product-1.jpg";
import gridPicture2 from "../../images/image-product-2.jpg";
import gridPicture3 from "../../images/image-product-3.jpg";
import gridPicture4 from "../../images/image-product-4.jpg";
import styled from "styled-components";

const Holder = styled.ul`
  width: 350px;
  display: flex;
  justify-content: space-between;
  & img {
    width: 60px;
    margin-top: 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  /* for focus */
  & img:focus {
    cursor: pointer;
    border: 3px solid hsl(26, 100%, 55%);
    filter: blur(0.7px);
  }
`;

function GridPictures() {
  return (
    <Holder>
      <img src={gridPicture1} alt="1st" tabindex="0"></img>
      <img src={gridPicture2} alt="2nd" tabindex="0"></img>
      <img src={gridPicture3} alt="3rd" tabindex="0"></img>
      <img src={gridPicture4} alt="4th" tabindex="0"></img>
    </Holder>
  );
}

export default GridPictures;
