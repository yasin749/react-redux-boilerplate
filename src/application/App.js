import React from 'react';

/* Store */
import Store from '../common/redux/Store';

/* Routes */
import HomePage from '../routes/HomePage/HomePage';

/* Styles */
import '../assets/styles/styles.scss'

function App() {
    return (
        <Store>
            <HomePage/>
        </Store>
    );
}

export default App;
