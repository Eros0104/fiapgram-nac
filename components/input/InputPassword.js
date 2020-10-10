import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
  faLock as fasLock
} from '@fortawesome/free-solid-svg-icons';

import { Input } from 'react-native-elements';

const InputPassword = (props) => {

    const placeholder = (props.confirm) 
                            ? 'Confirme sua senha:'
                            : 'Digite a sua senha:';

    return (
        <Input 
            leftIcon={
            <FontAwesomeIcon 
                icon={fasLock}
                size={24} />
            }
            placeholder={placeholder}
            secureTextEntry={true}
            {...props} />
    );
};

export default InputPassword;