import { KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Input, Title, GoBack } from "../styles/Blog.styled";

function Blog() {
  const navigate = useNavigate();

  const keyHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case "ArrowLeft":
        console.log("left");
        break;
      case "ArrowRight":
        console.log("right");
        break;
      case "Enter":
        console.log("enter");
        break;
      case "Space":
        console.log("space");
        break;
    }
  };

  return (
    <div className="blog">
      <Wrapper>
        <Input onKeyDown={async (e) => keyHandler(e)} />
        <Title>blog</Title>
        <GoBack onClick={() => navigate(-1)}>return</GoBack>
      </Wrapper>
    </div>
  );
}

export default Blog;
