import React from 'react';
import cx from 'classnames';

/* Components */
import Logo from '../../components/Logo/Logo';

/* Styles */
import s from './header.module.scss';

const Header = () => {
    return (
        <div className={cx(s.root)}>
            <div className={cx('container', s.inner)}>
                <Logo/>
            </div>
        </div>
    );
}

export default Header;
