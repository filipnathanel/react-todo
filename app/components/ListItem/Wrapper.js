import styled from 'styled-components';
import * as colors from 'utils/colors';

const Wrapper = styled.li`
  width: 100%;
  padding: 14px 0;
  display: flex;
  align-items: center;
  position: relative;

  &:before {
    display:block;
    content:"";
    position: absolute;
    width:calc( 100% - 7vw );
    height:1px;
    left: 3.5vw;
    top:0;
    background-color: ${colors.lightGray};
  }

  &:first-child {
    &:before{
      display: none;
    }
  }

  &:last-child {
    border-bottom: 1px solid ${colors.lightGray}
  }
`;

export default Wrapper;
