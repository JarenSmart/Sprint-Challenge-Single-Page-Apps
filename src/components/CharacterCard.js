import React from "react";
import styled from "styled-components";

function CharacterCard(props) {
  console.log(props);
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 70px 0;
    width: 100%;
    height: 75vh;
  `;

  const CharCard = styled.div`
    width: 100%;
    max-width: 900px;
    padding: 20px;
    background: #191b21;
    border-radius: 10px;
    height: auto;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  `;

  const CharImg = styled.img`
    height: 300px;
    width: 300px;
    position: absolute;
    overflow: hidden;
    left: 40px;
    top: 50px;
    border-radius: 12px;
    > img {
      width: 200px;
    }
  `;

  const CharName = styled.div`
    font-size: 3.5em;
    line-height: 1;
    color: #191b21;
    text-align: center;
    position: absolute;
    top: -45px;
    right: 10px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.06em;
  `;

  const CharDetailsContainer = styled.div`
    color: rgba(99, 96, 96, 0.8);
    width: 450px;
    background: #2d2f35;
    height: auto;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    float: right;
  `;

  const Group = styled.div`
    width: 175px;
    display: block;
    padding: 30px;
  `;

  const Label = styled.h3`
    font-size: 1.5rem;
    letter-spacing: 3px;
    color: aqua;
    text-transform: uppercase;
    line-height: 1;
    margin: 0 0 0.5em;
    &:first-child {
      margin-top: 0px;
    }
  `;

  const CharDetails = styled.span`
    color: #fff;
    font-size: 1.25rem;
  `;

  return (
    <Wrapper>
      <CharCard>
        <CharImg src={props.image} />
        <CharName>{props.name}</CharName>
        <CharDetailsContainer>
          <Group>
            <Label>Species</Label>
            <CharDetails>{props.species}</CharDetails>
          </Group>
          <Group>
            <Label>Gender</Label>
            <CharDetails>{props.gender}</CharDetails>
          </Group>
          <Group>
            <Label>Status</Label>
            <CharDetails>{props.status}</CharDetails>
          </Group>
        </CharDetailsContainer>
      </CharCard>
    </Wrapper>
  );
}

export default CharacterCard;
