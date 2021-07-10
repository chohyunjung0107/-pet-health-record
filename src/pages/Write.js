import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../styled-components/Util";

const Alert = (props) => {
  return (
    <>
      <div
        style={{
          width: "300px",
          height: "100px",
          background: "#000",
          color: "#fff",
          margin: "0 auto",
          position: "absolute",
          left: "10%",
          top: "30%",
          textAlign: "center",
          lineHeight: "3",
          borderRadius: "5px",
        }}
      >
        <p>"0이하로 입력할 수 없음"</p>
        <button
          onClick={() => {
            props.setCount(props.count + 1);
          }}
        >
          close
        </button>
      </div>
    </>
  );
};

const Write = () => {
  let history = useHistory();
  function back() {
    history.push("/");
  }

  /*************************************
   *  useState
   ************************************/
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function changeTxt(e) {
    setCount(e.target.value);
  }

  function plus() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count - 1);
  }

  function changeTxt2(e) {
    setCount2(e.target.value);
  }
  function plus2() {
    setCount2(count2 + 1);
  }
  function minus2() {
    setCount2(count2 - 1);
  }

  return (
    <>
      <div style={{ position: "relative" }}>
        {/* <form style={{ height: "100vh" }}> */}
        {count === -1 ? <Alert count={count} setCount={setCount} /> : ""}
        {count2 === -1 ? <Alert count={count} setCount2={setCount2} /> : ""}

        <div style={{ width: "100%", background: "#999" }}>
          <h3 style={{ textAlign: "center" }}>문항</h3>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "65px",
          }}
        >
          <label
            style={{
              width: "180px",
              height: "auto",
              textAlign: "center",
            }}
            htmlFor="toilet"
          >
            화장실
          </label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <label htmlFor="s">쉬</label>
              <button onClick={minus}>-</button>
              <input
                style={{ width: "50%" }}
                value={count}
                onChange={changeTxt}
              />
              <button onClick={plus}>+</button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <label htmlFor="d">덩</label>
              <button onClick={minus2}>-</button>
              <input
                style={{ width: "50%" }}
                value={count2}
                onChange={changeTxt2}
              />
              <button onClick={plus2}>+</button>
            </div>
          </div>
        </div>
        {/* //화장실 */}

        <div
          style={{
            height: "65px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <label
            style={{
              width: "180px",
              height: "auto",
              textAlign: "center",
            }}
            htmlFor="toilet"
          >
            맘마
          </label>
          <input style={{ marginLeft: "22px" }} type="text" />
        </div>
        {/* //맘마 */}

        <div
          style={{
            height: "65px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <label
            style={{
              width: "180px",
              height: "auto",
              textAlign: "center",
            }}
            htmlFor="toilet"
          >
            놀이
          </label>
          <input style={{ marginLeft: "22px" }} type="text" />
        </div>
        {/* //놀이 */}

        <div
          style={{
            height: "65px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <label
            style={{
              width: "180px",
              height: "auto",
              textAlign: "center",
            }}
            htmlFor="toilet"
          >
            영양제
          </label>
          <div
            style={{
              width: "50%",
              marginLeft: "5px",
              textAlign: "center",
            }}
          >
            Y <input type="checkbox" /> N <input type="checkbox" />
          </div>
        </div>
        {/* //영양제 */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "65px",
          }}
        >
          <label
            style={{
              width: "180px",
              height: "auto",
              textAlign: "center",
            }}
            htmlFor="toilet"
          >
            호흡수
          </label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="s">
              am
              <input
                type="text"
                style={{ width: "150px", marginLeft: "5px" }}
              />{" "}
            </label>
            <label htmlFor="d">
              pm
              <input
                type="text"
                style={{ width: "150px", marginLeft: "3px" }}
              />{" "}
            </label>
          </div>
        </div>
        {/* //호흡수 */}
        <div style={{ width: "100%" }}>
          <h3 style={{ textAlign: "center", background: "#999" }}>기타사항</h3>
          <div
            style={{
              height: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              style={{ width: "95%", height: "100px" }}
              type="text"
              placeholder="ex) 건강검진 다녀옴"
            />
          </div>
        </div>
        {/* //기타사항 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              marginBottom: "1%",
            }}
          >
            <input style={{ width: "290px", marginLeft: "2.5%" }} type="text" />
            <button style={{ marginLeft: "1%" }}>사진첨부</button>
          </div>
          <div
            style={{
              width: "95%",
              height: "50px",
              border: "1px solid #000",
              color: "#777",
              fontSize: ".7rem",
              lineHeight: "50px",
              textAlign: "center",
            }}
          >
            "사진보이는 곳"
          </div>
        </div>
        {/* //사진첨부 */}
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button>저장</Button>
          <Button onClick={back}>취소</Button>
        </div>
        {/* </form> */}
      </div>
    </>
  );
};

export default Write;
