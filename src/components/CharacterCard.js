import React from "react";
import styled from "styled-components";

function CharacterCard(props) {
  const Wrapper = styled.div`
    width: 70%;
    margin: 10px auto;
    display: flex;
    width: auto;
    height: auto;
    box-shadow: rgba(14, 21, 47, 0.6);
  `;

  const CharImg = styled.img`
    border-radius: 14px;
    width: 150px;
    height: 150px;
  `;

  const CharDetails = styled.div`
    text-align: center;
  `;

  return (
    <Wrapper>
      <CharImg src={props.image} />
      <CharDetails>
        <p>{props.name}</p>
        <p>{props.species}</p>
        <p>{props.gender}</p>
        <p>{props.status}</p>
      </CharDetails>
    </Wrapper>
  );
}

export default CharacterCard;
