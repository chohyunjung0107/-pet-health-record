import React from "react";
import styled from "styled-components";
import { Button } from "../styled-components/Util";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default function BtnBox(props) {
  return (
    <>
      <Wrap>
        <Button red>
          <Link style={{ color: "#fff" }} to="/write">
            {props.txt}
          </Link>
        </Button>
        <Button blue>{props.txt2}</Button>
      </Wrap>
    </>
  );
}
