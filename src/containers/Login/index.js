import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import api from "../../services/api";

import { toast } from "react-toastify";

import { useUser } from "../../hooks/UserContext";

import { Link, useHistory } from "react-router-dom";

import LoginImg from "../../assets/imgLogin.svg";
import Logo from "../../assets/logo.svg";

import { Button } from "../../components";

import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  SignLink,
  ErrorMessage,
} from "./styles";

export function Login() {
  const history = useHistory();
  const { putUserData } = useUser();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido!")
      .required("O e-mail é obrigatório!"),
    password: Yup.string()
      .required("A senha é obrigatória!")
      .min(6, "A senha deve conter no mínimo 6 digitos!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (clientData) => {
    const { data, status } = await api.post(
      "sessions",
      {
        email: clientData.email,
        password: clientData.password,
      },
      { validateStatus: () => true }
    );

    if (status === 200 || status === 201) {
      toast.success("Seja bem-vindo!");
    } else if (status === 401) {
      toast.warning("Verifique seu e-mail e senha!");
      return history.push("/login");
    } else {
      throw new Error();
    }

    putUserData(data);

    setTimeout(() => {
      if (data.admin) {
        history.push("/pedidos");
      } else {
        history.push("/");
      }
    }, 1000);
  };

  return (
    <Container>
      <LoginImage src={LoginImg} alt="img-login" />
      <ContainerItems>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Password</Label>
          <Input
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>
            Sign In
          </Button>
        </form>
        <SignLink>
          Não possui conta ?{" "}
          <Link style={{ color: "#fff" }} to="/register">
            Sign Up
          </Link>
        </SignLink>
      </ContainerItems>
    </Container>
  );
}
