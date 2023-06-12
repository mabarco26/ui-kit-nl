import React from 'react'
import { ButtonWrapper } from './Button.style'
import PropTypes from 'prop-types'
import { Primary } from './Button.stories';

export const Button = ({variant, backgroundColor, size, label, ...props}) => {
    return (
        <ButtonWrapper 
        variant = {variant}
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
     * Is this the principal call to action on the page?
     */
    variant: PropTypes.string,
    /**
     * What background color to use
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
    variant: null,
    backgroundColor: null,  
    size: 'medium',
    onClick: undefined,
  };

export default Button