import { useRef } from 'react';
import { CmdNotFound, Empty, Form, Hints, Input, MobileBr, MobileSpan, Wrapper } from "./styles/Terminal.styled";
import Typer from "./Typer";
import { useTheme } from "../hooks/useTheme";

const Terminal = () => {
    const containerRef = useRef(null);
    const {theme, themeLoaded, setMode} = useTheme();

    return (
        <Wrapper data-testid="terminal-wrapper" ref={containerRef}>
           <Typer text="welcome" typerStarter={`[${theme.colors.primary}]root[/]@[${theme.colors.secondary}]therafal.dev[/]:~$ `} />
        </Wrapper>
    );
}

export default Terminal;