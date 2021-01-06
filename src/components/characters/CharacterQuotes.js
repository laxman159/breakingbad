import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Phrase from "../Phrase";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  margin: 10px;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #093009 10%,
    #0d3e10 40%,
    #0f574e 100%
  );
  background-size: 200px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function CharacterQuotes() {
  const [phrase, setPhrase] = useState({});
  const getPhrase = async () => {
    const response = await fetch(
      `https://breaking-bad-quotes.herokuapp.com/v1/quotes`
    ).then((res) => res.json());
    setPhrase(response[0]);
  };
  useEffect(() => {
    getPhrase();
  }, []);
  return (
    <>
      <Container>
        <Phrase phrase={phrase} />
        <Button onClick={() => getPhrase()}>Generate</Button>
      </Container>
    </>
  );
}

export default CharacterQuotes;
