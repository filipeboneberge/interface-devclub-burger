import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import api from "../../services/api";

import { CardProduct } from "../../components";

import formatCurrency from "../../utils/formatCurrency";

import ProductsImage from "../../assets/products-image.svg";

import {
  Container,
  ProductsImg,
  CategoriesMenu,
  CategotyButton,
  ProductsContainer,
} from "./styles";

export function Products({ location: { state } }) {
  let categoryId = 0;
  if (state?.categoryId) {
    categoryId = state.categoryId;
  }

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryId);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");

      const newCategories = [{ id: 0, name: "Todos" }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get("products");

      const newProduct = allProducts.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) };
      });

      setProducts(newProduct);
    }

    loadProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProduct = products.filter(
        (product) => product.category_id === activeCategory
      );
      setFilteredProducts(newFilteredProduct);
    }
  }, [activeCategory, products]);

  return (
    <Container>
      <ProductsImg src={ProductsImage} alt="products-image" />
      <CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <CategotyButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategotyButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  );
}

Products.propTypes = {
  location: PropTypes.object,
};
