import styled from "styled-components";
import { ReactComponent as SVG } from "../../components/svg/theydonno.svg";

export const Wrapper = styled.div`
    margin 0;
    padding: 0;
`;

export const NotFoundSVG = styled(SVG)`
  height: 45%;
  width: 45%;
  fill: ${(props: any) => props.theme.colors.text[200]};
  font-family: "IBM Plex Sans", sans-serif;
  margin-left: 5vw;

  @media (max-aspect-ratio: 1/1) {
    width: 90vw;
    height: auto;
  }

  @media (min-aspect-ratio: 1/1) {
    height: 90vh;
    width: auto;
  }
`;
