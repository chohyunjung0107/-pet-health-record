import React from "react";
import styled from "styled-components";

const ErrorWrap = styled.div`
  height: 83vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #555;
  color: #fff;
`;

export default function Error() {
  return (
    <ErrorWrap>
      <h1>Error Page</h1>
    </ErrorWrap>
  );
}
