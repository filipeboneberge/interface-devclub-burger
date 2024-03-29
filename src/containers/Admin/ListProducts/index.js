import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import { Container, ContainerItems, EditIconStyles, Img } from "./styles";
import api from "../../../services/api";

import formatCurrency from "../../../utils/formatCurrency";

import { useHistory } from "react-router-dom";
import paths from "../../../constants/paths";

function ListProducts() {
  const [products, setProducts] = useState();
  const { push } = useHistory();

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("products");
      setProducts(data);
    }
    loadOrders();
  }, []);

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckCircleIcon style={{ color: "#228822" }} />;
    }

    return <CancelIcon style={{ color: "#cc1717" }} />;
  }

  function editProduct(product) {
    push(paths.EditProduct, { product });
  }

  return (
    <Container>
      <ContainerItems>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell align="center">Produto em Oferta</TableCell>
                <TableCell align="center">Imagem do Produto</TableCell>
                <TableCell>Editar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products &&
                products.map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell>{formatCurrency(product.price)}</TableCell>
                    <TableCell align="center">
                      {isOffer(product.offer)}
                    </TableCell>
                    <TableCell align="center">
                      <Img src={product.url} alt="imagem-produto" />
                    </TableCell>
                    <TableCell>
                      <EditIconStyles onClick={() => editProduct(product)} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ContainerItems>
    </Container>
  );
}

export default ListProducts;
