import styled from 'styled-components';

export const TyperWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TyperStarter = styled.div`
`;

export const DisplayedText = styled.span`
  margin-left: 0.5rem;
`;

export const Cursor = styled.span`
  animation: blink 1s step-end infinite;
  margin-left: 0.5rem;
`;

export const Keyframes = styled.style`
  @keyframes blink {
    from, to {
      visibility: hidden;
    }
    50% {
      visibility: visible;
    }
  }
`;

