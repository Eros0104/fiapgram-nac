import React from 'react';

import { Button as RNEButton } from 'react-native-elements';

const Button = (props) => {
    return (
        <RNEButton 
            containerStyle={{ backgroundColor : "#ed145b" }}
            titleStyle={{ color : "#FFFFFF" }}
            type="clear"
            {...props} />
    );
};

export default Button;