import styled from "styled-components";

export const Wrapper = styled.div`
    margin 0;
    padding: 0;
    font-weight: 900;
    position: relative;
    width: 100vw;
    height: 100vh;
    font-size: 1.5rem;
    z-index: 0;
    overflow: hidden;

    @media (min-width: 1024px) {
        font-size: 2.5rem;
    }

    @media (min-width: 1280px) {
        font-size: 3rem;
    }
`;

export const Input = styled.input`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
  cursor: default;
`;

export const Title = styled.h1`
  font-weight: 900;
  margin: 2rem;
  padding: 0;
  color: ${({ theme }) => theme.colors?.primary};
  font-size: 2rem;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  @media (min-width: 1280px) {
    font-size: 4rem;
  }
`;

export const GoBack = styled.button`
    margin 2rem;
    vertical-align: bottom;
    position: absolute;
    bottom: 0;
    left: 0;
    color: ${({ theme }) => theme.colors?.text[100]};
    font-weight: 900;
    transition: 0.2s;
    animation: none;
    background-color: rgba(0, 0, 0, 0);
    text-decoration: underline;
    z-index: 3;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors?.text[200]};
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
    }
    &:active {
        color: ${({ theme }) => theme.colors?.text[300]};
        background-color: ${({ theme }) => theme.colors?.text[100]};
        cursor: pointer;
    }
`;

export default Wrapper;
