import React from "react";

import { Container } from "./styles";

import { SideMenuAdmin } from "../../components";

import Orders from "./Orders";

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <Orders />
    </Container>
  );
}
