import React, { useEffect, useState } from "react";

import api from "../../services/api";

import Carousel from "react-elastic-carousel";

import OfferImage from "../../assets/offer.png";

import formatCurrency from "../../utils/formatCurrency";

import { Container, OfferImg, ContainerItems, Image, Button } from "./styles";

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOffer() {
      const { data } = await api.get("products");
      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) };
        });
      setOffers(onlyOffers);
    }
    loadOffer();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 5 },
  ];

  return (
    <Container>
      <OfferImg src={OfferImage} alt="home-image" />
      <Carousel
        itemsToShow={5}
        style={{ width: "90%" }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map((product) => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="foto da categoria" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button>Peça agora!</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}
