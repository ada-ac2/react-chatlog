import React from 'react';
import { useState } from 'react';

const Post = () => {
    const [likesCount, setLikesCount] = useState(0);
    const increaseLikes = () => {
        console.log('We\'re inside increaseLikes!');
        setLikesCount(likesCount+1);
    }
    return (
        <section>
        <p>The number of likes is {likesCount} '♥️'. </p>
        <button onClick={increaseLikes}>Like</button>
        </section>
    );
};

export default Post;