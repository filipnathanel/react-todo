import styled from 'styled-components';

import * as colors from 'utils/colors';

export default styled.div`
  width: 33%;
  text-align:center;
  padding: 0.66em 0;
  border-right: 1px solid ${colors.lightGray};

  &:last-child{
    border-right:none;
  }

  &:before{
    content:'';
    display:inline-block;
    width:1em;
    vertical-align:middle;
    margin-right:0.33em;
    margin-bottom:3px;
    height:1em;
    border: 1px solid ${colors.lightBlue};
    border-radius:10px;
    background-color: ${({ active }) => active ? colors.lightBlue : 'transparent'};
  }
`;
