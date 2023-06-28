import styled from 'styled-components';

export const Container = styled.div`
  height: 50vh;

  & h1 {
    text-align: center;
    font-weight: bold;
    font-size: 3em;
    padding: 1.5em;
  }

  & button {
    display: block;
    margin: 1em auto;
    width: 20em;
    height: 3em;
    border: none;
    background-color: gray;
    color: white;
    font-weight: bold;
  }

  *:disabled {
    background-color: white;
    color: white;
}

`;

export const SignFrom = styled.form`
  padding: 3em;
  & input {
    width: 20em;
    height: 3em;
    margin: 1em;
  }
`;

export const IdLine = styled.div`
  margin: 0 auto;
  display: table;
`;

export const PwLine = styled.div`
  margin: 0 auto;
  display: table;
`;
