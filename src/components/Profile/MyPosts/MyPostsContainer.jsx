import React from 'react';
import { addPostActionCreator } from './../../../redux/profilePageReducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsData: state.profilePage.dialogsData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (values) => {
      dispatch(addPostActionCreator(values));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);