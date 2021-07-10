import React from "react";
import styled from "styled-components";
import { LogOut } from "react-feather";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export default function Menu() {
  return (
    <Wrap>
      <Link to="/login">
        <LogOut />
      </Link>
    </Wrap>
  );
}
