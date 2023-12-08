import styled from "styled-components";

export const Container = styled.div`
  background: #efefef;
  min-height: calc(100vh - 72px);
`;

export const ProductsImg = styled.img`
  width: 100%;
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 50px;
`;

export const CategotyButton = styled.button`
  color: ${(props) => (props.isActiveCategory ? "#9758A6" : "#9a9a9d")};
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background: none;
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && "2px solid #9758A6"};
  padding-bottom: 5px;
  cursor: pointer;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`;
