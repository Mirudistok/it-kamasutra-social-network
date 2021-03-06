import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Aside from './components/Aside/Aside';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { Route, withRouter } from 'react-router-dom';
import LegionPrivateMessageContainer from './components/LegionPrivateMessage/LegionPrivateMessageContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeAppThunkCreator } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app__wrapper">
        <HeaderContainer />
        <Aside />
        <div className="content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
          {/* <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} /> */}
          <Route path='/legionMessage' render={() => <LegionPrivateMessageContainer />} />
        </div>

      </div>
    );

  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp: initializeAppThunkCreator,
  })
)(App);