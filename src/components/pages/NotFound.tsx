import { NotFoundSVG } from "../styles/NotFound.styled";
import { useTheme } from "../../hooks/useTheme";

function NotFound() {
    const {theme} = useTheme();

    return (
        <>
            <NotFoundSVG theme={theme} />
        </>
    );
}

export default NotFound;