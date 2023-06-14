import React from 'react';
import { ButtonWrapper } from './Button.style';
import PropTypes from 'prop-types';

const Button = ({variant, backgroundColor, size, label, ...props}) => {
  const mode = variant ? 'primary' : 'secondary';
    return (
        <ButtonWrapper
        variant = {mode}
        backgroundColor = {backgroundColor}
        size = {size}
        label = {label}
        {...props}>
            {label}
        </ButtonWrapper>
    );
};

Button.propTypes = {
    /**
     * What type of button to use?
     */
    variant: PropTypes.bool,
    /**
     * What background color to use?
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  Button.defaultProps = {
    variant: false,
    backgroundColor: null,  
    size: 'medium',
    onClick: undefined,
  };

export default Button