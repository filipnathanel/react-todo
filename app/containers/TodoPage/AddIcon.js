import styled from 'styled-components';

import NormalIcon from 'components/Icon';
import * as colors from 'utils/colors';

const AddButton = styled(NormalIcon)`
  fill: ${colors.white};
  background-color: ${colors.lightBlue};
  width:50px;
  height: 50px;
  padding: 15px;
  border-radius:25px;
  position:absolute;
  bottom:25px;
  right:3.5vw;
  box-shadow: 0px 0px 10px #ddd;
`;

export default AddButton;
