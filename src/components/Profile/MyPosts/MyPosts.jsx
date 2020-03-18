import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from './../../../utils/validators/validators'
import { Textarea } from './../../common/FormsControl/FormsControl'



const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postElements = props.dialogsData.map(item => <Post message={item.message} likesCount={item.likesCount} />);

  const onSubmitMyPost = (values) => {
    props.addPost(values.addPost);
  }

  return (
    <div className={s.myPosts}>
      <div className={s.profileInfo__form}>
        <div className={s.profileInfo__formTitle}>
          My posts
        </div>
        <MyPostsReduxForm onSubmit={onSubmitMyPost} />
      </div>
      <div>
        {
          postElements
        }
      </div>
    </div>
  );
};

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="your news..." name={"addPost"} component={Textarea} validate={[required, maxLength10]} />
      <button>Send</button>
    </form>
  )
}

const MyPostsReduxForm = reduxForm({
  form: "addMyPost"
})(MyPostsForm)

export default MyPosts;