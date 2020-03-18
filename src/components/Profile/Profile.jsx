import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile} updateStatus={props.updateStatus}  status={props.status} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;