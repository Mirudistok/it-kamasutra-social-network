import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPageAC, setToggleIsFollowingProgressAC, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from './../../redux/usersPageReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import withAuthRedirectComponent from './../../hoc/withAuthRedirect'
import { compose } from 'redux'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (itemNumberPage) => {
        this.props.setCurrentPage(itemNumberPage);
        this.props.getUsers(itemNumberPage, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                setCurrentPage={this.setCurrentPage}
                followingInProgress={this.props.followingInProgress}
                setToggleIsFollowingProgress={this.props.setToggleIsFollowingProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    withAuthRedirectComponent,
    connect(mapStateToProps, {
        setCurrentPage: setCurrentPageAC,
        setToggleIsFollowingProgress: setToggleIsFollowingProgressAC,
        getUsers: getUsersThunkCreator,
        follow: followThunkCreator,
        unfollow: unfollowThunkCreator,
    })
)(UsersContainer);