import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* Actions */
import {actions as postActions} from '../../common/redux/posts/postActions';

/* Layouts */
import MasterLayout from '../../layouts/MasterLayout/MasterLayout';

/* Components */
import PostList from '../../partials/Post/List/PostList';

/* Styles */
import s from './home-page-module.scss'

const HomePage = ({
  dispatch,
  posts,
}) => {
    useEffect(() => {
        dispatch(postActions.getPosts());
    }, []);

    return (
        <MasterLayout>
            <div className={cx('container', s.root)}>
                {
                    posts.length > 0 &&
                    <PostList posts={posts}/>
                }
            </div>
        </MasterLayout>
    );
}

HomePage.prototype = {
    dispatch: PropTypes.func.isRequired,
    posts: PropTypes.array,
}

HomePage.defaultProps = {
    posts: [],
}

const mapStateToProps = (state) => {
    const {
        postState: {
            posts,
        }
    } = state;

    return {
        posts
    };
};

export default connect(mapStateToProps)(HomePage);
