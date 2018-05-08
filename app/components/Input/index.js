import styled from 'styled-components';
import * as colors from 'utils/colors';

export const inputStyles = `
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  display: block;
  width: 100%;
  padding: 0.5em 0;
  margin-bottom: 0.2em;
  border-bottom: 1px solid ${colors.lightBlue};

  &:focus{
    outline:none;
  }
`;

export default styled.input`${inputStyles}`;
