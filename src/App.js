import React from "react";

// compoenet
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Grid from "./components/Grid";

// style component
import SeachBox from "./components/Banner";
import BtnBox from "./components/BtnBox";

// page component
import Write from "./pages/Write";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { MobileWrap, ContentWrap } from "./styled-components/Util";
import { GlobalStyle } from "./styled-components/GlobalStyle";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <MobileWrap>
        <GlobalStyle />
        <Link to="/">
          <Header path="/" title={"어쩌냥 일기😼"} />
        </Link>
        <Switch>
          <Route exact path="/">
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
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </MobileWrap>
    </BrowserRouter>
  );
}
