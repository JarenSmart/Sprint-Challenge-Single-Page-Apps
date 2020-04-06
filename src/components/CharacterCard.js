import React from "react";
import styled from "styled-components";

function CharacterCard(props) {
  const Wrapper = styled.div`
    width: auto;
    background-color: gray;
    box-shadow: rgba(14, 21, 47, 0.6);
  `;

  const CharCard = styled.div`
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    width: 30%;
    height: auto;
  `;

  const CharImg = styled.img`
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 14px;
    width: 150px;
    height: 150px;
  `;

  const CharDetails = styled.div`
    font-family: monospace;
    font-size: 16px;
    text-align: center;
  `;

  return (
    <Wrapper>
      <CharCard>
        <CharImg src={props.image} />
        <CharDetails>
          <p>{props.name}</p>
          <p>{props.species}</p>
          <p>{props.gender}</p>
          <p>{props.status}</p>
        </CharDetails>
      </CharCard>
    </Wrapper>
  );
}

export default CharacterCard;
