import styled from "styled-components";

import EditIcon from "@mui/icons-material/Edit";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: #efefef;
  justify-content: space-between;
`;

export const ContainerItems = styled.div`
  padding: 20px;
`;

export const EditIconStyles = styled(EditIcon)`
  cursor: pointer;
`;

export const Img = styled.img`
  width: 70px;
  border-radius: 5px;
`;
