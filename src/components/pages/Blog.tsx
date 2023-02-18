import React, { useState } from 'react';
import { Wrapper } from '../styles/Blog.styled';

function Blog () {
    const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
        console.log(event.code);
    };

    return (
        <div className="blog">
            <input>
            <Wrapper>
                <h1>Blog</h1>
                <p>Blog page</p>
            </Wrapper>
            </input>
        </div>
    );
}

export default Blog;