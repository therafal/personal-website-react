import { Wrapper, Container, Options, Link } from "./styles/Main.styled";
import { useState, useEffect } from "react";
import Typer from "../components/Typer";
import { useTheme } from "../hooks/useTheme";

function Main() {
  const { theme } = useTheme();
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
          <Typer
            text="welcome"
            typerStarter={`[${theme.colors.primary}]root[/]@[${theme.colors.secondary}]therafal.dev[/]:~$ `}
            typingSpeed={225}
          />
          {showOptions ? (
            <Options>
              <Link href="/about-me">about-me</Link>
              <Link href="/blog">blog</Link>
            </Options>
          ) : (
            <Options />
          )}
        </Container>
      </Wrapper>
    </div>
  );
}

export default Main;
