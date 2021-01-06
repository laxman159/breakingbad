import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 100%;
  height: auto;

  @media (min-width: 992px) {
    margin-bottom: 1rem;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #000;
    position: relative;
    padding-left: 4rem;
    &::before {
      content: open-quote;
      font-size: 10rem;

      color: #000;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;

    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Phrase = ({ phrase }) => {
  return (
    <>
      <Container>
        <h1>{phrase.quote}</h1>
        <p>--{phrase.author}</p>
      </Container>
    </>
  );
};

export default Phrase;
