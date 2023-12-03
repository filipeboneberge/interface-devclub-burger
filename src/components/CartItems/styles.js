import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: (0px 10px 40px rgba(0, 0, 0, 0.03));
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    color: #b5b5b5;
    font-size: 16px;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  width: max-content;
  grid-gap: 10px 15px;

  p {
    font-size: 16px;
  }

  img {
    width: 120px;
    border-radius: 10px;
  }
`;

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;
