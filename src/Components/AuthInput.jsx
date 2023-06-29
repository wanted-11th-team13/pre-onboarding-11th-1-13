import styled from 'styled-components';

const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid black;
  padding: 5px 10px;
  outline: none;
  margin: 10px 0;
  background-color: white;
  color: navy;
  box-shadow: 4px 4px black;
  font-size: 15px;
  font-weight: 600;

  &::placeholder {
    color: dimgray;
    opacity: 0.8;
  }

  &:focus {
    border: 2px solid blue;
  }
`;

export default function AuthInput({ value, onChange, placeholder, type }) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}
