import React, { useState } from 'react';
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/ui/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'dd', body: 'Description1' },
    { id: 2, title: 'vv', body: 'Description2' },
    { id: 3, title: 'nn', body: 'Description3' },
  ]);
  const [selectSort, setSelectSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSelectSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr />
      <div>
        <MySelect
          value={selectSort}
          onChange={sortPosts}
          defaultValue="sort"
          options={[
            { value: 'title', name: 'по названию' },
            { value: 'body', name: 'по описанию' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="List Post #1" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No a Posts</h1>
      )}
    </div>
  );
}

export default App;
