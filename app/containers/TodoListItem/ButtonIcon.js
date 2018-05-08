import styled from 'styled-components';

import * as colors from 'utils/colors';
import TodoIcon from './TodoIcon';

const Icon = styled(TodoIcon)`
  fill: ${(props) => props.active ? colors.white : colors.darkBlue};
  background-color: ${(props) => props.active ? colors.darkBlue : colors.white};
  border: 1px solid ${colors.lightGray};
  border-radius: 25px;
  float:left;

  &:last-child{
    margin-right:0px;
  }
  
`;

export default Icon;
