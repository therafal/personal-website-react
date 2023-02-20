export type LoginParams = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: number;
    username: string;
  };
};

export type user = {
  id: number;
  username: string;
};

export type Post = {
  id: number;
  title?: string;
  content?: string;
  createdAt?: number;
  author?: user;
};
