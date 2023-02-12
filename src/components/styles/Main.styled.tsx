import styled from 'styled-components';

export const Wrapper = styled.div`
  margin 0;
  padding: 0;
  font-size: 1.5rem;

  @media (max-aspect-ratio: 2/1) {
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (min-aspect-ratio: 8/5) {
    font-size: 2.5rem;
    font-weight: 900;
  }
  
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  margin 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;

  @media (max-aspect-ratio: 2/1) {
    width: 24rem;
  }

  @media (min-aspect-ratio: 8/5) {
    width: 37rem;
  }
`;

export const Options = styled.div`
  margin 0;
  padding: 0;
  witdh: 100%;
  display: inline-block;
  height: 3rem;
  
  * {
    margin 0;
    padding: 0;
    margin-right: 3rem;

    @media (max-aspect-ratio: 2/1) {
      margin-right: 2rem;
    }

    @media (min-aspect-ratio: 8/5) {
      margin-right: 3rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colors?.text[100]};
  }

  a:hover {
    color: ${({ theme }) => theme.colors?.text[200]};
  }

  a:active {
    color: ${({ theme }) => theme.colors?.text[300]};
    background-color: ${({ theme }) => theme.colors?.text[100]};
  }
`;

export default Wrapper;