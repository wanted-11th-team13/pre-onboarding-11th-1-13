import styled from 'styled-components';

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 20px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${props => (props.disabled ? 'gray' : 'rgb(14, 14, 26)')};
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  -webkit-box-reflect: below 10px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));

  &:active {
    scale: ${props => props.disabled === false && '0.92'};
  }

  &:hover {
    background: ${props =>
      props.disabled === false &&
      'linear-gradient(270deg,rgba(2, 29, 78, 0.681) 0%,rgba(31, 215, 232, 0.873) 60%)'};
    color: ${props => props.disabled === false && 'rgb(4, 4, 38)'};
  }
`;

export default function AuthButton({ children, onClick, disabled }) {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
}
