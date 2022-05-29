import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "routes/home";
import * as Styled from "styles";
import Header from "components/header";

const App = () => {
  return (
    <React.StrictMode>
      <Styled.Main>
        <Styled.Container>
          <Header />
          <Styled.Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Styled.Content>
        </Styled.Container>
      </Styled.Main>
    </React.StrictMode>
  );
};

export default App;
