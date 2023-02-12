import styled from 'styled-components';

export const Wrapper = styled.div`
  margin 0;
  padding: 0;
  font-weight: 900;
  position: relative;
  width: 100vw;
  height: 100vh;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1280px) {
    font-size: 3rem;
  }
`;

export const Container = styled.div`
  margin 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: 7rem;

  @media (min-width: 1024px) {
    width: 37rem;
    height: 11rem;
  }

  @media (min-width: 1280px) {
    width: 50rem;
    height: 15rem;
  }
`;

export const Options = styled.div`
  margin 0;
  padding: 0;
  witdh: 100%;
  display: inline-block;
  height: 2rem;

  @media (min-width: 1024px) {
    height: 4rem;
  }
  @media (min-width: 1280px) {
    height: 6rem;
  }
  
  * {
    margin 0;
    padding: 0;
    margin-right: 4rem;
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