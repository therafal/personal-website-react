import styled from 'styled-components';

export const TyperWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;

export const TyperStarter = styled.div`
  margin: 0;
  padding: 0;
`;

export const DisplayedText = styled.span`
  margin: 0;
  padding: 0;
  margin-left: 0.7rem;
`;

export const Cursor = styled.span`
  animation: blink 1s step-end infinite;
  margin: 0;
  padding: 0;
  margin-left: 0.7rem;
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

