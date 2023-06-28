import styled from 'styled-components';

const Div = styled.div`
  width: 500px;
  height: 500px;
  margin: 100px 0;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  padding: 20px;
  background: lightgrey;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 4px 4px black;
`;

export default function Container({ children }) {
  return <Div>{children}</Div>;
}
