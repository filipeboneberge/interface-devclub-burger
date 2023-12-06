import React, { useState, useEffect } from "react";

import { useCart } from "../../hooks/CartContext";

import formatCurrency from "../../utils/formatCurrency";

import api from "../../services/api";

import { toast } from "react-toastify";

import { Container } from "./styles";

import { Button } from "../Button";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(5);

  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setFinalPrice(sumAllItems);
  }, [cartProducts, deliveryTax]);

  const submitOrder = async () => {
    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    try {
      const { status } = await api.post(
        "orders",
        {
          products: order,
        },
        { validateStatus: () => true }
      );
      if (status === 200 || status === 201) {
        toast.success("Pedido realizado com sucesso!");
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Erro Servidor! Tente mais tarde!");
    }
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de Entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button style={{ width: "100%", marginTop: 30 }} onClick={submitOrder}>
        Finalizar Pedido
      </Button>
    </div>
  );
}
