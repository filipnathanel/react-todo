import styled from 'styled-components';

export default styled.div`
  font-weight: 500;
  margin-top:0.15em;
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'}
`;
