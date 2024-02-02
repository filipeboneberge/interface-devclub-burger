import React from "react";

import { Container, ContainerItems } from "./styles";

import { SideMenuAdmin } from "../../components";

import paths from "../../constants/paths";

import PropTypes from "prop-types";

import Orders from "./Orders";
import ListProducts from "./ListProducts";

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
      </ContainerItems>
    </Container>
  );
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};
