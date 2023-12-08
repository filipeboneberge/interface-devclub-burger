import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`;

export const PageLink = styled.a`
  color: ${(props) => (props.isActive ? "#9758A6" : "#555555")};
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  line-height: normal;

  cursor: pointer;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContainerText = styled.div`
  p {
    color: #555555;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid #bababa;
`;

export const PageLinkExit = styled.a`
  color: #9758a6;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
`;
