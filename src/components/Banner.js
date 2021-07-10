import styled from "styled-components";

const Content1 = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
  position: relative;
  background: rgba(255, 153, 102, 0.5);

  &::before {
    width: 100%;
    height: 100%;
    content: "";
    background-image: url(/image/banner-img.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 70% 60%;
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.7;
  }
`;
const SeachWarp = styled.div`
  width: 350px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  margin-bottom: 3%;
  border-radius: 5px;
`;
const InputWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 75%;
  height: 30px;
  border-radius: 5px;
  border: none;
`;
const Button = styled.button`
  width: 60px;
  height: 30px;
  margin-left: 1%;
  border: none;
  border-radius: 5px;
  background: #15a29c;
  &:hover {
    background: #96cbd1;
    color: #000;
  }
  color: #fff;
`;

export default function Banner(props) {
  return (
    <>
      <Content1>
        <SeachWarp>
          <InputWrap>
            <Input type="text" placeholder="  검색..." />
            <Button>검색</Button>
          </InputWrap>
        </SeachWarp>
      </Content1>
    </>
  );
}
