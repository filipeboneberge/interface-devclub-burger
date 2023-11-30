import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import api from "../../services/api";

import { toast } from "react-toastify";

import { Link } from "react-router-dom";

import RegisterImg from "../../assets/imgRegister.svg";
import Logo from "../../assets/logo.svg";

import { Button } from "../../components";

import {
  Container,
  RegisterImage,
  ContainerItems,
  Label,
  Input,
  SignLink,
  ErrorMessage,
} from "./styles";

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required("O seu nome é obrigatório!"),
    email: Yup.string()
      .email("Digite um e-mail válido!")
      .required("O e-mail é obrigatório!"),
    password: Yup.string()
      .required("A senha é obrigatória!")
      .min(6, "A senha deve conter no mínimo 6 digitos!"),
    confirmPassword: Yup.string()
      .required("A senha é obrigatória!")
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        "users",
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true }
      );
      if (status === 200 || status === 201) {
        toast.success("Seja bem-vindo!");
      } else if (status === 409) {
        toast.warning("E-mail já cadastrado! Faça Login para continuar!");
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Erro Servidor! Tente mais tarde!");
    }
  };

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="img-login" />
      <ContainerItems>
        <img src={Logo} alt="logo" />
        <h1>Cadastrar-se</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Password</Label>
          <Input
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>ConfirmPassword</Label>
          <Input
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>
            Sign Up
          </Button>
        </form>
        <SignLink>
          Já possui conta ?{" "}
          <Link style={{ color: "#fff" }} to="/login">
            Sign In
          </Link>
        </SignLink>
      </ContainerItems>
    </Container>
  );
}
