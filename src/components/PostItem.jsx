import React from 'react';
import MyButton from './ui/button/MyButton';
import { useNavigate } from 'react-router-dom';

function PostItem(props) {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate(`/posts/${props.post.id}`);
  };
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
        <MyButton style={{ margin: '0 15px' }} onClick={handleOpen}>
          Open
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
