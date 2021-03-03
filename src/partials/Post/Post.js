import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* Components */
import Cart from '../../components/Cart/Cart';

/* Styles */
import s from './post.module.scss';


const Post = ({
    classname,
    post,
}) => {
    return (
        <div className={cx(classname, s.root)}>
            <Cart
                title={post.title}
                body={post.body}/>
        </div>
    );
}

Post.prototype = {
    classname: PropTypes.string,
    post: PropTypes.object.isRequired,
}

export default Post;
