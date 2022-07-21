import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const PrinterItem = ({ printer }) => {
  return (
    <Container>
      <p>{printer.modelName}</p>
      <p>{printer.manufacturer}</p>
    </Container>
  );
};
