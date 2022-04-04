import styled from "styled-components";
const Holder = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-bottom: 20px;
  & h1 {
    font-family: "Kumbh Sans", sans-serif;
    font-size: 2.3rem;
    line-height: 110%;
    margin-bottom: 20px;
  }
  & span {
    color: hsl(26, 100%, 55%);
    font-family: "Kumbh Sans", sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 30px;
  }
  & p {
    font-size: 0.9rem;
    font-weight: 400;
    font-family: "Kumbh Sans", sans-serif;
    color: hsl(219, 9%, 45%);
  }
`;

function TextHolder() {
  return (
    <Holder>
      <span>SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
    </Holder>
  );
}

export default TextHolder;
