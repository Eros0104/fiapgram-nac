import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
    faUser as fasUser
} from '@fortawesome/free-solid-svg-icons';

import { Input } from 'react-native-elements';


const InputUsername = (props) => {
    return (
        <Input 
            leftIcon={
                <FontAwesomeIcon 
                    icon={fasUser}
                    size={24} />
            }
            placeholder="Digite seu usuário:"
            {...props}/>
    );
};

export default InputUsername;