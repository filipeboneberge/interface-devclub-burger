import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  background: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background: #9758a6;
    color: #efefef;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    background: #bebebf;
    color: #efefef;
    border: none;
  }
`;

export const CategoryImg = styled.img``;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`;

export const Button = styled(Link)`
  margin-top: 16px;
  height: 50px;

  border: none;
  border-radius: 8px;
  background: #9758a6;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  color: #fff;

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
