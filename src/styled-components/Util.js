import styled, { css } from "styled-components";

export const MobileWrap = styled.div`
  width: 375px;
  height: auto;
  margin: 0 auto;
  border: 1px solid #000;
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: auto;
  /* background: rgba(0, 0, 0, 0.5); */
`;

export const Button = styled.button`
  /* width: 50px;
  height: 20px; */
  padding: 5px 15px;
  margin: 2% 0 2% 1%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #000;

  &:hover {
    color: #fff;
    background: #000;
  }

  ${(props) =>
    props.red &&
    css`
      background: red;
      border: none;
      color: #fff;

      &:hover {
        background: #999;
      }
    `}

  ${(props) =>
    props.blue &&
    css`
      background: blue;
      border: none;
      color: #fff;

      &:hover {
        background: #999;
      }
    `};
`;
