import React from 'react';

/* Styles */
import s from './logo.module.scss';

const Logo = () => {
    return (
        <div className={s.root}>
            <div className={s.text}>
                Application
            </div>
        </div>
    );
}

export default Logo;
