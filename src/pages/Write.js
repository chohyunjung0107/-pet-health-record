import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../styled-components/Util";

//리덕스
import { useSelector, useDispatch } from "react-redux";
import { stateRecords } from "store/records/recordsSlice.js";
import actionsRecords from "store/records/recordsActions.js";

// const Alert = (props) => {
// 	return (
// 		<>
// 			<div
// 				style={{
// 					width: "300px",
// 					height: "100px",
// 					background: "#000",
// 					color: "#fff",
// 					margin: "0 auto",
// 					position: "absolute",
// 					left: "10%",
// 					top: "30%",
// 					textAlign: "center",
// 					lineHeight: "3",
// 					borderRadius: "5px",
// 				}}
// 			>
// 				<p>"0이하로 입력할 수 없음"</p>
// 				<button
// 					onClick={() => {
// 						props.setCount(props.count + 1);
// 					}}
// 				>
// 					close
// 				</button>
// 			</div>
// 		</>
// 	);
// };

const Write = () => {
	let history = useHistory();
	function back() {
		history.push("/");
	}

	//리덕스
	const dispatch = useDispatch();
	const record = { ...useSelector(stateRecords).record };
	console.log(record);

	return (
		<>
			<div style={{ position: "relative" }}>
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
							<button
								onClick={() => {
									if (record.restroomPee <= 0) {
										return;
									}
									record.restroomPee -= 1;
									dispatch(actionsRecords.recordSet(record));
								}}
							>
								-
							</button>
							<input
								style={{ width: "50%" }}
								value={record.restroomPee}
								onChange={(event) => {
									if (isNaN(event.target.value)) {
										return;
									}
									record.restroomPee = Number(event.target.value);
									//디스패치가 리듀서 안에 멤버셋 함수를 호출한다.(익스포트한 액션스멤버스는 리듀서 안에 함수를 모아 놓은 오브젝트)
									dispatch(actionsRecords.recordSet(record));
								}}
							/>
							<button
								onClick={() => {
									// if (record.restroomPee <= 0) {
									// 	return;
									// }
									record.restroomPee += 1;
									dispatch(actionsRecords.recordSet(record));
								}}
							>
								+
							</button>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<label htmlFor="d">덩</label>
							<button
								onClick={() => {
									if (record.restroomPoo <= 0) {
										return;
									}
									record.restroomPoo -= 1;
									dispatch(actionsRecords.recordSet(record));
								}}
							>
								-
							</button>
							<input
								style={{ width: "50%" }}
								value={record.restroomPoo}
								onChange={(event) => {
									if (isNaN(event.target.value)) {
										return;
									}
									record.restroomPoo = Number(event.target.value);
									dispatch(actionsRecords.recordSet(record));
								}}
							/>
							<button
								onClick={() => {
									record.restroomPoo += 1;
									dispatch(actionsRecords.recordSet(record));
								}}
							>
								+
							</button>
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
					<input
						style={{ marginLeft: "22px" }}
						type="text"
						value={record.meal}
						onChange={(event) => {
							if (isNaN(event.target.value)) {
								return;
							}
							record.meal = Number(event.target.value);
							dispatch(actionsRecords.recordSet(record));
						}}
					/>
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
					<input
						style={{ marginLeft: "22px" }}
						type="text"
						value={record.play}
						onChange={(event) => {
							if (isNaN(event.target.value)) {
								return;
							}
							record.play = Number(event.target.value);
							dispatch(actionsRecords.recordSet(record));
						}}
					/>
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
						Y{" "}
						<input
							type="radio"
							// value={true}
							name="nutrients"
							onChange={() => {
								record.nutrients = true;
								dispatch(actionsRecords.recordSet(record));
							}}
						/>
						N{" "}
						<input
							type="radio"
							// value={false}
							name="nutrients"
							defaultChecked={true}
							onChange={() => {
								record.nutrients = false;
								dispatch(actionsRecords.recordSet(record));
							}}
						/>
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
								value={record.breathAm}
								onChange={(event) => {
									if (isNaN(event.target.value)) {
										return;
									}
									record.breathAm = Number(event.target.value);
									dispatch(actionsRecords.recordSet(record));
								}}
							/>
						</label>
						<label htmlFor="d">
							pm
							<input
								type="text"
								style={{ width: "150px", marginLeft: "3px" }}
								value={record.breathPm}
								onChange={(event) => {
									if (isNaN(event.target.value)) {
										return;
									}
									record.breathPm = Number(event.target.value);
									dispatch(actionsRecords.recordSet(record));
								}}
							/>
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
						{/* <input
							style={{ width: "95%", height: "100px" }}
							type="text"
							placeholder="ex) 건강검진 다녀옴"
							value={record.restroomPoo}
							onChange={(event) => {
								if (isNaN(event.target.value)) {
									return;
								}
								record.restroomPoo = Number(event.target.value);
								dispatch(actionsRecords.recordSet(record));
							}}
						/> */}
						<textarea
							style={{ width: "95%", height: "100px" }}
							type="text"
							placeholder="ex) 건강검진 다녀옴"
							value={record.notice}
							onChange={(event) => {
								record.notice = event.target.value;
								dispatch(actionsRecords.recordSet(record));
							}}
						></textarea>
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
					<Button onClick={()=>{
						dispatch(actionsRecords.recordCreate(record));
					}}>저장</Button>
					<Button onClick={back}>취소</Button>
				</div>
			</div>
		</>
	);
};

export default Write;
