import React from 'react';
import styled from 'styled-components';
import { ClimbingBoxLoader } from 'react-spinners';

interface Props {
  color?: string;
  size?: number;
}

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingSpinner: React.FC<Props> = ({ color = '#262626', size = 20 }) => {
  return (
    <SpinnerContainer>
      <ClimbingBoxLoader color={color} size={size} />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;