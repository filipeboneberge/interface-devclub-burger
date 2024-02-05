import styled from "styled-components";

import Background from "../../assets/background.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("${Background}");
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginImage = styled.img`
  height: 70%;
`;

export const ContainerItems = styled.div`
  height: 70%;
  border-radius: 0 10px 10px 0;
  background: #373737;
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 25px 75px;

  h1 {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 100px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 28px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 391.416px;
  height: 38.319px;
  padding-left: 10px;

  border: ${(props) => (props.error ? "2px solid #CC1717" : "none")};
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
`;

export const SignLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  a {
    color: #fff;
    cursor: pointer;
  }
`;
