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