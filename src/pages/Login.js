import React from "react";
import { Button } from "../styled-components/Util";
import styled from "styled-components";

const LoginWrap = styled.div`
  height: 83vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #555;
  color: #fff;
`;
const LabelWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3%;

  label {
    width: 130px;
  }
  input {
    height: 25px;

    &:focus {
      outline: none;
    }
  }
`;

export default function Login() {
  return (
    <LoginWrap>
      <div style={{ height: "100px" }}>
        <h2>LOGIN</h2>
      </div>
      <form>
        <LabelWrap>
          <label htmlFor="id">id</label>
          <input type="text" />
        </LabelWrap>
        <LabelWrap>
          <label htmlFor="pw">password</label>
          <input type="text" />
        </LabelWrap>
        <Button style={{ width: "100%", margin: "10% auto" }}>Login</Button>
      </form>
    </LoginWrap>
  );
}
