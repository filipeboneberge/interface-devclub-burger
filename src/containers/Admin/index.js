import React from "react";

import { Container } from "./styles";

import { SideMenuAdmin } from "../../components";

// import Orders from "./Orders";

import ListProducts from "./ListProducts";

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      {/* <Orders /> */}
      <ListProducts />
    </Container>
  );
}
