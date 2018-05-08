import styled from 'styled-components';
import { inputStyles } from 'components/Input';
import * as colors from 'utils/colors';

export default styled.button
.attrs({ type: 'submit' })`
  ${inputStyles}
  border-bottom:none;
  background-color: ${colors.lightBlue};
  text-transform: uppercase;
  color: white;
  padding-top:1em;
  padding-bottom:1em;
  margin-top:2em;
  box-shadow: 0px 3px 12px rgba(0,0,0, 0.5);
  border-radius:3px;

  transition: box-shadow 0.13s;

  &:hover{
    cursor:pointer;
    box-shadow: 0px 1px 2px rgba(0,0,0, 0.5);
  }
`;
