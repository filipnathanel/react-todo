import styled from 'styled-components';
import { inputStyles } from 'components/Input';

export default styled.button
.attrs({ type: 'submit' })`
  ${inputStyles}
  border-bottom:none;
`;
