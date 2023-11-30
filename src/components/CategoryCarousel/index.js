import React, { useEffect, useState } from "react";

import api from "../../services/api";

import Carousel from "react-elastic-carousel";

import CategoryImage from "../../assets/category.png";

import {
  Container,
  CategoryImg,
  ContainerItems,
  Image,
  Button,
} from "./styles";

export function CategoryCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");

      setCategories(data);
    }
    loadCategories();
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
      <CategoryImg src={CategoryImage} alt="home-image" />
      <Carousel
        itemsToShow={5}
        style={{ width: "90%" }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map((category) => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt="foto da categoria" />
              <Button>{category.name}</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}
