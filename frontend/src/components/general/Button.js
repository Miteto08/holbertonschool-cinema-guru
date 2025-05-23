import React from 'react';
import PropTypes from 'prop-types';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({
    label,
    className,
    onClick,
    icon
}) {
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
        >
            {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.object
};

export default Button;
