import styled, { keyframes, css} from 'styled-components';
import { size } from 'polished';

import { ReactComponent as Logo } from '../assets/logo.svg';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const animationRule = css`
  display: block;
  margin: auto;
  fill: purple;
  path: {
    transformOrigin: center;
    animation: ${spin} 1s linear infinite;
  },
`;

export default styled(Logo)`
  animation: ${animationRule}
`;
