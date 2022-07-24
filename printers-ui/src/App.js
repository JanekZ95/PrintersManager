import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import styled from "styled-components";
import { LoginView } from "./views/loginView/LoginView";
import { PrintersSearchView } from "./views/printersSearchView/PrintersSearchView";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <PrintersSearchView />
            </Container>
          }
        />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
