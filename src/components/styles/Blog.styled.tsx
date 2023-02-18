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