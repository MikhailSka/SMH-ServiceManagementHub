import styled from '@emotion/styled';

export const StyledBackground = styled.div`
  background-image: linear-gradient(-60deg, #6c3 20%, #09f 80%);
  bottom: 0;
  left: 0;
  opacity: 0.5;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
  padding: 0;

  &:nth-of-type(2) {
    left: calc(var(--scroll) * -50%);
  }

  &:nth-of-type(3) {
    left: calc(var(--scroll) * -100%);
  }
`;