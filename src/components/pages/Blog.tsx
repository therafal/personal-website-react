import { KeyboardEvent, ReactComponentElement } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Input, Title, GoBack } from "../styles/Blog.styled";
import { getPosts } from "../../utils/api";
import Post from "../Post";

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

  const posts = async () => {
    const response = await getPosts();
    return response;
  };

  const Posts = posts().then((posts) => {
    let postList: ReactComponentElement<typeof Post>[] = [];
    posts.map((post) => {
      console.log(post.title);
      postList.push(<Post title={post.title} createdAt={post.createdAt} />);
    });
    return postList;
  });

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
