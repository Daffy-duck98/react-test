import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import MyLoader from '../components/ui/loader/MyLoader';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComment, isCommentLoading, commentError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentById(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchComment(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>PostIdPage{params.id}</div>
      {isLoading ? (
        <MyLoader />
      ) : (
        <>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </>
      )}
      <p>{error}</p>
      {isCommentLoading ? (
        <MyLoader />
      ) : (
        <>
          <h1>Comments:</h1>
          <div>
            {comments.map((com) => (
              <div>
                <div>{com.email}</div>
                <div>{com.body}</div>
              </div>
            ))}
          </div>
        </>
      )}
      <p>{commentError}</p>
    </>
  );
};

export default PostIdPage;
