import styled from '@emotion/styled';

export const StyledBackground = styled.div`
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
  padding: 0;

  &:nth-of-type(2) {
    animation-direction: alternate-reverse;
    animation-duration: 4s;
  }

  &:nth-of-type(3) {
    animation-duration: 5s;
  }

  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
`;
