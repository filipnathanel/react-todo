import styled from 'styled-components';

import TodoIcon from './TodoIcon';
import * as colors from 'utils/colors';

const Icon = styled(TodoIcon)`
  fill: ${colors.darkBlue};
  border: 1px solid ${colors.lightGray};
  border-radius: 25px;
  margin-right:7px;
`;

export default Icon;
