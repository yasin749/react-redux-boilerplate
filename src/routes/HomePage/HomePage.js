import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

/* Layouts */
import MasterLayout from '../../layouts/MasterLayout';

/* Actions */
import {actions as postActions} from '../../common/redux/posts/postActions';

const HomePage = ({
    dispatch,
}) => {
    useEffect(() => {
        dispatch(postActions.getPosts());
    }, []);

    return (
        <MasterLayout>
            <div>
                It's home page
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
