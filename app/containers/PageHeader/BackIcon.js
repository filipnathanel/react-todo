import styled from 'styled-components';

import NormalIcon from 'components/Icon';
import * as colors from 'utils/colors';

const AddButton = styled(NormalIcon)`
  fill: ${colors.lightBlue};
  width:50px;
  height: 50px;
  padding: 13px;
  position:absolute;
  left:calc(3.5% - 15px);
  top:50%;
  transform: translateY(-50%);
`;

export default AddButton;
