import React, { useEffect, useState } from "react";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { Container, Label, Input, ButtonStyles, LabelUpload } from "./styles";
import api from "../../../services/api";
import ReactSelect from "react-select";

import { useForm, Controller } from "react-hook-form";

function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const { register, handleSubmit, control } = useForm();
  const [categories, setCategories] = useState([]);
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
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

        <Controller
          name="categoty_id"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={(cat) => cat.name}
                getOptionValue={(cat) => cat.id}
                placeholder="Categorias"
              />
            );
          }}
        ></Controller>

        <ButtonStyles>Adicionar Produto</ButtonStyles>
      </form>
    </Container>
  );
}

export default NewProduct;
