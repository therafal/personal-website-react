import styled from 'styled-components';
import { ReactComponent as SVG } from '../svg/theydonno.svg';

export const NotFoundSVG = styled(SVG)`
    height: 40%;
    width: 40%;
    fill: ${(props: any) => props.theme.colors.text[200]};
    font-family: 'IBM Plex Sans', sans-serif;

    @media (max-aspect-ratio: 1/1) {
        width: 100%;
    }

    @media (min-aspect-ratio: 1/1) {
        height: 100%;
    }
`;