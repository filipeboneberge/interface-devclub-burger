import React from "react";

import HomeImage from "../../assets/home-image.svg";

import { Container, HomeImg } from "./styles";

import { CategoryCarousel, OffersCarousel } from "../../components/";

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeImage} alt="home-image" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}
