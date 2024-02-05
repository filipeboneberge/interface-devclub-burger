import React from "react";

import { Container, ContainerItems } from "./styles";

import { SideMenuAdmin } from "../../components";

import paths from "../../constants/paths";

import PropTypes from "prop-types";

import Orders from "./Orders";
import ListProducts from "./ListProducts";
import NewProduct from "./NewProduct";
import EditProduct from "./EditProduct";

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
        {path === paths.NewProduct && <NewProduct />}
        {path === paths.EditProduct && <EditProduct />}
      </ContainerItems>
    </Container>
  );
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};
