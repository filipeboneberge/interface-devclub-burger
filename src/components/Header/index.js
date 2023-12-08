import React from "react";

import { useHistory } from "react-router-dom";

import CartImg from "../../assets/cart.svg";
import PersonImg from "../../assets/person.svg";

import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  Line,
  PageLinkExit,
} from "./styles";

export function Header() {
  const {
    push,
    location: { pathname },
  } = useHistory();

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push("/")} isActive={pathname === "/"}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push("/produtos")}
          isActive={pathname.includes("produtos")}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => push("/carrinho")}>
          <img src={CartImg} alt="carrinho" />
        </PageLink>
        <PageLink>
          <img src={PersonImg} alt="person" />
        </PageLink>
        <Line></Line>
        <ContainerText>
          <p>Olá, Filipe</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
