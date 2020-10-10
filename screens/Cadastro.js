import React, { useCallback, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import InputEmail from '../components/input/InputEmail';
import InputPassword from '../components/input/InputPassword';
import InputUsername from '../components/input/InputUsername';

import Button from '../components/button/Button';

import { createUser } from '../functions'

const Cadastro = (props) => {

  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [errors, setErrors] = useState([]);

  const validar = () => {
    const newErrors = [];

    if (username.trim().length < 6) {
      newErrors.push('Username não pode ser menor que 06 caracteres;');
    }

    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regexEmail.test(email)) {
      newErrors.push('E-mail não é válido!');
    }

    const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,40}$/
    if (!regexSenha.test(password)) {
      newErrors.push('Senha precisa ter no mínimo 06 caracteres sendo: maiúsculos, minúsculos, numéricos!');
    }

    if (confirmPassword != password) {
      newErrors.push('Confirmação de senha não é idêntica!');
    }

    setErrors(newErrors);

    return newErrors.length === 0;
  }

  const handleSalvar = async () => {
    if (validar()) {
      const response = await createUser(email, password);
      if (response.success) {
        props.navigation.navigate('Login');
      } else {
        setErrors(response.errors);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <InputUsername
        onChangeText={(txt) => setUsername(txt)}
        value={username} />

      <InputEmail
        onChangeText={(txt) => setEmail(txt)}
        value={email} />

      <InputPassword
        onChangeText={(txt) => setPassword(txt)}
        value={password} />

      <InputPassword
        confirm
        onChangeText={(txt) => setConfirmPassword(txt)}
        value={confirmPassword} />

      <Button
        onPress={() => handleSalvar()}
        title="Salvar" />

      {errors.length > 0 &&
        <View style={styles.containerErrors}>
          {errors.map((erro) => <Text style={styles.error}>{erro}</Text>)}
        </View>
      }

    </SafeAreaView>
  );
};

export default Cadastro;

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  containerErrors: {
    backgroundColor: '#DDD',
    marginTop: 8,
    padding: 16
  },
  error: {
    marginBottom: 8
  }
});