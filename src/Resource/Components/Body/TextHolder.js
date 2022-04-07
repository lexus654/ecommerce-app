import styled from "styled-components";
import Content from "../Content";
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

function TextHolder(props) {
  return (
    <Holder>
      <span>{props.title}</span>
      <h1>{props.productName}</h1>
      <p>{props.description}</p>
    </Holder>
  );
}

export default TextHolder;
