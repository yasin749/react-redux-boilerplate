import React from 'react';
import PropTypes from "prop-types";

/* Styles */
import s from './cart.module.scss';

const Cart = ({
  title,
  body,
}) => {
    return (
        <div className={s.root}>
            <div className={s.title}>
                {title}
            </div>
            <div className={s.description}>
                {body}
            </div>
        </div>
    );
}

Cart.prototype = {
    title: PropTypes.string,
    body: PropTypes.string,
}

export default Cart;
