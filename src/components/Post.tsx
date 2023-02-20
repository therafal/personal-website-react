type PostProps = {
  title?: string;
  createdAt?: number;
};

function Post(props: PostProps) {
  return (
    <div className="post">
      <h1>{props.title ? props.title : "Cannot get title"}</h1>
      <p>
        {props.createdAt
          ? new Date(props.createdAt).toLocaleString()
          : new Date(0).toLocaleString()}
      </p>
    </div>
  );
}

export default Post;
