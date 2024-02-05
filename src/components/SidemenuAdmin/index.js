import React from "react";

import PropTypes from "prop-types";

import listLinks from "./menuList";

import LogoutIcon from "@mui/icons-material/Logout";

import { Container, ItemContainer, ListLink } from "./styles";

import { useUser } from "../../hooks/UserContext";

export function SideMenuAdmin({ path }) {
  const { logout } = useUser();
  return (
    <Container>
      <hr></hr>
      {listLinks.map((item) => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: "fixed", bottom: "30px" }}>
        <LogoutIcon style={{ color: "#ffffff" }} />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  );
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string,
};
