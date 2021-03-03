import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* Components */
import Post from '../Post';

/* Styles */
import s from './post-list.module.scss';

const PostList = ({
    posts,
}) => {
    return (
        <div className={cx(s.root)}>
            {
                posts.map((post, index) => (
                    <Post
                        key={index}
                        classname={s.post}
                        post={post}/>
                ))
            }
        </div>
    );
}

PostList.prototype = {
    posts: PropTypes.array.isRequired,
}

export default PostList;
