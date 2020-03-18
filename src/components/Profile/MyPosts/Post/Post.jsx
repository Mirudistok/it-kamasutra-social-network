import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post__content}>
      <img className={s.post__img} src="https://i.pinimg.com/originals/85/cf/e0/85cfe01d1b28ade334429a089efa8ed7.png" />
      <div className="post__text">
        <a href="#">{props.message}</a>
        <span>likesCount: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;