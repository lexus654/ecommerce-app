import Content from "../Content";
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

function GridPictures(props) {
  return (
    <Holder>
      <img src={props.gridPicture1} alt="1st" tabindex="0"></img>
      <img src={props.gridPicture2} alt="2nd" tabindex="0"></img>
      <img src={props.gridPicture3} alt="3rd" tabindex="0"></img>
      <img src={props.gridPicture4} alt="4th" tabindex="0"></img>
    </Holder>
  );
}

export default GridPictures;
