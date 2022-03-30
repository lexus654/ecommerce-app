import styled from "styled-components";
const Holder = styled.div`
  text-align: left;
  & span {
    color: blue;
    width: 100%;
  }
`;

function TextHolder() {
  return (
    <Holder>
      <span>SNEAKER COMPANY</span>
      <h1>Fall Limited Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
    </Holder>
  );
}

export default TextHolder;
