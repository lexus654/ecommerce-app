import styled from "styled-components";
const Holder = styled.div`
  text-align: left;
  width: 75%;
  background-color: coral;
  & span {
    color: blue;
    font-size: 0.9rem;
  }
  & h1 {
    font-size: 2.7rem;
  }
  & p {
    font-size: 0.9rem;
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
