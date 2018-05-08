import styled from 'styled-components';
import * as colors from 'utils/colors';

export const inputStyles = `
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  display: block;
  width: 100%;
  padding: 0.66em 0;
  margin-bottom: 1em;
  border-bottom: 1px solid ${colors.paleBlue};
  color: white;

  &:focus{
    outline:none;
  }

  &::-webkit-input-placeholder{
    color: ${colors.paleBlue};
    opacity:1;
  }

`;

export default styled.input`${inputStyles}`;
