import { useState, useEffect } from "react";
import styled from "styled-components";

//리덕스
import { useDispatch, useSelector } from "react-redux";
import { stateRecords } from "store/records/recordsSlice.js";
import actionsRecords from "store/records/recordsActions.js";




const Wrap = styled.div`
  width: 375px;
  height: 500px;
  background: yellow;
`;

const Table = styled.table`
  width: 375px;
  border-collapse: collapse;
`;

const Theade = styled.thead`
  width: 375px;
  border-bottom: 1px solid #000;
  text-align: center;
  `;

const Td = styled.td`
  border: 1px solid #000;
  /* border-bottom: 1px solid #000; */
  text-align: center;
  background: skyblue;
  padding: 5px 10px;
`;
const Tb = styled.td`
  height: 30px;
  border: 1px solid #000;
  text-align: center;
`;
const Ellipeis = styled.p`
  width: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default function Grid() {
  const [on, setOn] = useState(false);
  function open() {
    setOn(!on);
  }
  const mon = [1, 2, 3, 4, 5, 6, 7, 8];


  const dispatch = useDispatch();
	const records = useSelector(stateRecords).records; 
  useEffect(() => {
		dispatch(actionsRecords.recordsRead());
	}, [dispatch]);

  console.log(records)

  return (
    <Wrap>
      <Table>
          <Theade>
            <tr>
              <Td>restroomPee</Td>
              <Td>restroomPoo</Td>
              <Td>meal</Td>
              <Td>play</Td>
              <Td>nutrients</Td>
              <Td>breathAm</Td>
              <Td>breathPm</Td>
              <Td>notic</Td>
              <Td>etc.</Td>
            </tr>
          </Theade>
        <tbody>
          <tr
            style={{
              width: "500px",
              background: "yellow",
              textAlign: "center",
              marginLeft: "-100px",
            }}
          >
            <Td colSpan="10">
              {mon[0]}월<button onClick={open}>{on ? "닫힘" : "열림"}</button>
            </Td>
          </tr>
          {records.map(
            (record, idx) =>
              on === true && (
                <tr key={idx}>
                  <Tb>{record.restroomPee}</Tb>
                  <Tb>{record.restroomPoo}</Tb>
                  <Tb>{record.meal}g</Tb>
                  <Tb>{record.play}min</Tb>
                  <Tb>{record.nutrients  ? 'Y' : 'N'}</Tb>
                  <Tb>{record.breathAm}</Tb>
                  <Tb>{record.breathPm}</Tb>
                  <Tb><Ellipeis>{record.notice}</Ellipeis></Tb>
                  <Tb>
                    <button onClick={()=>{
                      dispatch(actionsRecords.recordsDelete(idx));
                    }}>삭제</button>
                    <button>수정</button>
                  </Tb>
                </tr>
              )
          )}
        </tbody>
      </Table>
    </Wrap>
  );
}
