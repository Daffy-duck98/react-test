import React, { useState } from 'react';
import MyInput from './ui/input/MyInput';
import MyButton from './ui/button/MyButton';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: '', body: '' });
  };
  return (
    <form>
      <MyInput
        type="text"
        placeholder="title post"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <MyInput
        type="text"
        placeholder="description post"
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      />
      <MyButton onClick={addNewPost}>create a post</MyButton>
    </form>
  );
};

export default PostForm;
