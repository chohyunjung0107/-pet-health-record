import React from "react";
import { Button } from "../styled-components/Util";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { stateMembers, actionsMembers } from 'store/members/membersSlice.js';

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
  // 스테이트가 변하면 해당 컴포넌트가 다시 그려진다(재실행).
  // console.log("sssss") 
  const dispatch = useDispatch(); //리듀터의 함수를 호출하기 위한 함수 
  //(...유즈셀렉서(스테이스): 전부 복사.이닛스테이트 안에 있는 멤버를 가져옴)
  const member = {...useSelector(stateMembers).member};
  const history = useHistory();
  if (member.isLogin) {
    history.push('/read');
  }
  return (
    <LoginWrap>
      <div style={{ height: "100px" }}>
        <h2>LOGIN</h2>
      </div>
      <form 
      onSubmit={event=>{
        // preventDefault: 액션을 막았다.
        event.preventDefault();
        dispatch(actionsMembers.memberLogin(member));
      }}
      >
        <LabelWrap>
          <label htmlFor="id">id</label>
          <input type="text"
            value={member.id}
            onChange={event=>{
              member.id=event.target.value;
              //디스패치가 리듀서 안에 멤버셋 함수를 호출한다.(익스포트한 액션스멤버스는 리듀서 안에 함수를 모아 놓은 오브젝트)
              dispatch(actionsMembers.memberSet(member));
            }}
          />
        </LabelWrap>
        <LabelWrap>
          <label htmlFor="pw">password</label>
          <input type="password"
            value={member.password}
            onChange={event=>{
              member.password=event.target.value;
              dispatch(actionsMembers.memberSet(member))
            }}
          />
        </LabelWrap>
        <Button style={{ width: "100%", margin: "10% auto" }}>Login</Button>
      </form>
    </LoginWrap>
  );
}
