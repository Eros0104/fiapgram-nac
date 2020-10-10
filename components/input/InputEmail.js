import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
    faEnvelope as fasEnvelope
} from '@fortawesome/free-solid-svg-icons';

import { Input } from 'react-native-elements';

const InputEmail = (props) => {
    return (
        <Input 
            leftIcon={
                <FontAwesomeIcon 
                    icon={fasEnvelope}
                    size={24} />
            }
            placeholder="Digite seu e-mail:"
            {...props}/>
    );
}

export default InputEmail;