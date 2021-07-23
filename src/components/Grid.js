import { useState } from "react";
import styled from "styled-components";
import Usefetch from "../hooks/Usefetch";
// import { Button } from "../styled-components/Util";

const Wrap = styled.div`
  width: 100%;
  height: 500px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Theade = styled.thead`
  border-bottom: 1px solid #000;
  text-align: center;
`;

const Td = styled.td`
  border-bottom: 1px solid #000;
  text-align: center;
`;
const Tb = styled.td`
  height: 30px;
  border: 1px solid #000;
`;
const Ellipeis = styled.p`
  width: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default function Grid() {
  const [on, setOn] = useState(false);
  // const [on2, setOn2] = useState(false);
  function open() {
    setOn(!on);
  }
  // function open2() {
  //   setOn2(!on2);
  // }
  const data = Usefetch("http://localhost:3001/data");
  const list = Usefetch("http://localhost:3001/list");
  const mon = [1, 2, 3, 4, 5, 6, 7, 8];

  // console.log(data);
  // console.log(list);

  return (
    <>
      <Wrap>
        <Table>
          {list.map((item, idx) => (
            <Theade key={idx}>
              <tr>
                <Td>{item.day}</Td>
                <Td>{item.toilet}</Td>
                <Td>{item.food}</Td>
                <Td>{item.play}</Td>
                <Td>{item.Nutrients}</Td>
                <Td>{item.ect}</Td>
              </tr>
            </Theade>
          ))}
          <tbody>
            <tr
              style={{
                width: "500px",
                background: "yellow",
                textAlign: "center",
                marginLeft: "-100px",
              }}
            >
              <Td colSpan="6">
                {mon[0]}월<button onClick={open}>{on ? "닫힘" : "열림"}</button>
              </Td>
            </tr>
            {data.map(
              (item, idx) =>
                on === true && (
                  <tr key={idx}>
                    <Tb>{item.day}일</Tb>
                    <Tb>
                      {item.toiletS}/{item.toiletD}
                    </Tb>
                    <Tb>{item.food}g</Tb>
                    <Tb>{item.play}min</Tb>
                    <Tb>{item.Nutrients}</Tb>
                    <Tb>
                      <Ellipeis>{item.ect}</Ellipeis>
                    </Tb>
                  </tr>
                )
            )}
          </tbody>
        </Table>
      </Wrap>
    </>
  );
}
