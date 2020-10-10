import auth from '@react-native-firebase/auth';
import { generateResponse } from '../database/response';

const createUser = async (email, password) => (
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Cadastro realizado com sucesso!")
      return generateResponse(true)
    })
    .catch(error => generateResponse(
      false, getErrors(error)
    ))
)

const logIn = async (email, password) => (
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => generateResponse(true))
    .catch(error => generateResponse(
      false, getErrors(error)
    ))
)

const getErrors = (error) => {
  const errors = [];

  if (error.code === 'auth/email-already-in-use') {
    errors.push("Este email já está cadastrado!");
  }

  if (error.code === 'auth/invalid-email') {
    errors.push('O email é inválido!');
  }

  if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
    errors.push("Email ou senha inválidos!");
  }

  return errors;
}

export { createUser, logIn }