import styled from "styled-components";

export const Wrapper = styled.div`
    margin 0;
    padding: 0;
    font-weight: 900;
    position: relative;
    width: 100vw;
    height: 100vh;
    font-size: 1.5rem;
    overflow: hidden;

    @media (min-width: 1024px) {
        font-size: 2.5rem;
    }

    @media (min-width: 1280px) {
        font-size: 3rem;
    }
`;

export const Title = styled.div`
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

export const Text = styled.p`
    margin 2rem;
    padding: 0;
    color: ${({ theme }) => theme.colors?.text[100]};
    font-size: 1.5rem;

    @media (min-width: 1024px) {
        font-size: 2.5rem;
    }
    @media (min-width: 1280px) {
        font-size: 3rem;
    }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.text[100]};
  font-weight: 900;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors?.text[200]};
  }
  &:active {
    color: ${({ theme }) => theme.colors?.text[300]};
    background-color: ${({ theme }) => theme.colors?.text[100]};
  }
`;
