import styled from 'styled-components';

import * as colors from 'utils/colors';

export default styled.div`

background-color: ${({ active }) => active ? colors.darkBlue : colors.lightBlue};
color:white;

  width: 33.3333%;
  text-align:center;
  padding: 1em 0;
  border-right: 1px solid ${colors.white};
  cursor:pointer;

  &:last-child{
    border-right:none;
  }

`;
