import { PostWrapper } from "./styles/Post.styled";

type PostProps = {
  title?: string;
  createdAt?: number;
};

function Post(props: PostProps) {
  return (
    <PostWrapper>
      <h1>{props.title ? props.title : "Cannot get title"}</h1>
      <p>
        {props.createdAt
          ? new Date(props.createdAt).toLocaleString()
          : new Date(0).toLocaleString()}
      </p>
    </PostWrapper>
  );
}

export default Post;
