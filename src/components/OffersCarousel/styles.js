import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
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

export const OfferImg = styled.img``;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    color: #424242;
  }
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
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

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
