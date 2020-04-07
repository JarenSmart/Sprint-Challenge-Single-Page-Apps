import React from "react";
import styled from "styled-components";

const MainImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height: 500px;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <MainImg
          alt="rick"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        />
      </header>
    </section>
  );
}
