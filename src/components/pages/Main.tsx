import { Wrapper, Container, Options } from "../styles/Main.styled"
import { useState, useEffect } from "react";
import Typer from "../Typer"
import { useTheme } from "../../hooks/useTheme";

function Main() {
    const {theme} = useTheme();
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowOptions(true);
        }, 1700);
    }, []);

    return (
        <div className="main">
            <Wrapper>
                <Container>
                    <Typer text="welcome" typerStarter={`[${theme.colors.primary}]root[/]@[${theme.colors.secondary}]therafal.dev[/]:~$ `} typingSpeed="225" />
                    {showOptions ? (
                        <Options>
                            <a href="#">about-me</a>
                            <a href="#">blog</a>
                        </Options>
                    ) : (
                        <Options />
                    )}
                </Container>
            </Wrapper>
        </div>
    )
}

export default Main