import styled from "styled-components";
import { PrinterItem } from "../printerItem/PrinterItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20em;
`;

export const PrintersList = ({ printers }) => {
  return (
    <Container>
      {printers.map((p, i) => (
        <PrinterItem key={i} printer={p} />
      ))}
    </Container>
  );
};
