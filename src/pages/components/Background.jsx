import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default function Background({ children }) {
  return <Container>{children}</Container>;
}

Background.propTypes = {
  children: PropTypes.node.isRequired,
};
