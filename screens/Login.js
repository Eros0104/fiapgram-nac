import React, { 
  useCallback,
  useState
} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faImages as fasImages
} from '@fortawesome/free-solid-svg-icons';

import InputPassword from '../components/input/InputPassword';
import InputEmail from '../components/input/InputEmail';

import Button from '../components/button/Button';

import  { logIn } from '../functions';

const Login = (props) => {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const clearForm = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  const handleLogin = async () => {
    if ( email.trim().length === 0 || password.trim().length === 0 ) {
      alert('Preencha os campos corretamente!');
      return;
    }
    const response = await logIn(email, password);

    if(response.success){
      props.navigation.navigate('Main');
    } else {
      clearForm();
      alert(response.errors[0]);
    }
  }

  const handleCadastro = useCallback(() => {
    props.navigation.navigate('Cadastro');
  }, []);

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.logotipo }>
        <FontAwesomeIcon 
            color="#ed145b"
            icon={fasImages}
            size={128}/>

        <Text style={ styles.logotipoTexto }>
          FIAPGram 2.0
        </Text>
      </View>

      <InputEmail 
        onChangeText={ (txt) => setEmail(txt) }
        value={ email }/>

      <InputPassword 
        onChangeText={ (txt) => setPassword(txt) }
        value={ password }/>

      <Button 
        title="Login"
        onPress={ () => handleLogin() } />

      <TouchableOpacity 
        onPress={ useCallback(() => handleCadastro(), []) }
        style={ styles.containerLinkCadastro }>
        <Text style={ styles.linkCadastro }>
          Cadastre-se
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    padding : 16
  },
  containerLinkCadastro : {
    marginTop : 16
  },
  linkCadastro : {
    textAlign : 'center'
  },
  logotipo : {
    alignItems : 'center',
    marginBottom : 16
  },
  logotipoTexto : {
    fontSize : 20,
    fontWeight : 'bold'
  }
});

export default Login;
