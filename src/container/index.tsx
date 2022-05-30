import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "routes/home";
import * as Styled from "styles";
import Header from "components/header";
import { MyGlobalContext } from "core/contexts";
import { Show } from "core/types";
import { emptyShow } from "utils/constants";
import DeatilsPage from "routes/details";

const App = () => {
  const [copy, setCopy] = useState<Show>(emptyShow);
  return (
    <React.StrictMode>
      <Styled.Main>
        <Styled.Container>
          <Header />
          <Styled.Content>
            <MyGlobalContext.Provider value={{ copy, setCopy }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="details"
                  element={<DeatilsPage showDetails={copy} />}
                />
              </Routes>
            </MyGlobalContext.Provider>
          </Styled.Content>
        </Styled.Container>
      </Styled.Main>
    </React.StrictMode>
  );
};

export default App;
