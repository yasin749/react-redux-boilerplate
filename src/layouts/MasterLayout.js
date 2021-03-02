import React from 'react';

/* Components */
import Header from '../partials/Header/Header';

const MasterLayout = ({
    children,
}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}

export default MasterLayout;
