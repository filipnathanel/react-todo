import styled from 'styled-components';

import { inputStyles } from 'components/Input';

export default styled.div`

  ${inputStyles}
  position:relative;
  cursor:pointer;

  &:before{
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    top: 50%;
    margin-top: -3px;
    right: 3px;
    border-width: 5px 5px 0;
    border-color: #83ABD1 transparent transparent;
    transform: ${({ open }) => open ? 'rotate(180deg)' : 'none' };
  }

`;
