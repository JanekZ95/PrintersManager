import React from "react";
import styled from "styled-components";
import { PrintersSearchView } from "./views/printersSearchView/PrintersSearchView";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <PrintersSearchView />
    </Container>
  );
}

export default App;
