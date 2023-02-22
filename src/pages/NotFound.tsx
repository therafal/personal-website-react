import { Wrapper, NotFoundSVG } from "./styles/NotFound.styled";
import { useTheme } from "../hooks/useTheme";

function NotFound() {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <a href="/">
        <NotFoundSVG theme={theme} />
      </a>
    </Wrapper>
  );
}

export default NotFound;
