import React, { useEffect, useState } from "react";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { Container, Label, Input, ButtonStyles, LabelUpload } from "./styles";
import api from "../../../services/api";
import ReactSelect from "react-select";

import { useForm } from "react-hook-form";

function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("products");
    }
    loadOrders();
  }, []);

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input type="text" {...register("name")} />

        <Label>Preço</Label>
        <Input type="number" {...register("price")} />

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon /> Carregue imagem do produto
            </>
          )}
          <Input
            type="file"
            id="image-input"
            accept="image/png, image/jpeg"
            {...register("file")}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name);
            }}
          />
        </LabelUpload>

        <ReactSelect />

        <ButtonStyles>Adicionar Produto</ButtonStyles>
      </form>
    </Container>
  );
}

export default NewProduct;
