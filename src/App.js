import React from "react";

// compoenet
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Grid from "./components/Grid";
// page component
import Write from "./pages/Write";
import Login from "./pages/Login";
import Error from "./pages/Error";
// style component
import SeachBox from "./components/Banner";
import BtnBox from "./components/BtnBox";
//redux
import { MobileWrap, ContentWrap } from "./styled-components/Util";
import { GlobalStyle } from "./styled-components/GlobalStyle";
//router
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<MobileWrap>
				<GlobalStyle />
				<Link to="/read">
					<Header path="/read" title={"어쩌냥 일기😼"} />
				</Link>
				<Switch>
					<Route exact path="/read">
						<ContentWrap>
							<Menu />
							<SeachBox />
							<BtnBox txt="기록" txt2="수정" />
							<Grid />
						</ContentWrap>
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/write">
						<Write />
					</Route>
					<Route path="/error">
						<Error />
					</Route>
					<Redirect to={{ pathname: "/login" }} />
					{/* 스위치 안에 맞는 경로가 없으면 기본 되는 경로 */}
				</Switch>
				<Footer />
			</MobileWrap>
		</BrowserRouter>
	);
}
