import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Alert
} from 'react-native';

import logoImg from '../../../assets/icon.png';
import styles from './styles';
import screens from '../../config/navigation';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const nav = useNavigation();

  function checkInputs() {
    if (id.length === 0) {
      Alert.alert('ID', 'Please insert your ID');
      return false;
    }
    if (password.length === 0) {
      Alert.alert('Password', 'Please insert your password');
      return false;
    }
    return true;
  }

  async function handleLogin() {
    if (isLoading) return;
    if (!checkInputs()) return;
    Keyboard.dismiss();
    setIsLoading(true);

    await api
      .post('/sessions', { id })
      //Redirect to NGO dashboard save the "token"
      .then(resp => console.log(resp))
      //Display error message
      .catch(err => {
        let message = err.message;
        if (err.message.includes('timeout')) {
          message = 'Please check your network connection.';
        }
        Alert.alert('Timeout', message);
      });
    setIsLoading(false);
  }

  function navigateToRegister() {
    nav.navigate(screens.Register);
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={'position'}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => nav.goBack()}>
            <Feather name='arrow-left' size={28} color='white' />
          </TouchableOpacity>
          <Image style={styles.heroesImg} source={logoImg} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Please enter your ID below</Text>
          <TextInput
            value={id}
            onChangeText={value => {
              setId(value);
            }}
            style={[styles.textInput, { textAlign: 'center' }]}
            placeholder='ID'
            blurOnSubmit={false}
            returnKeyType='next'
            onSubmitEditing={() => {
              _inputPassword.focus();
            }}
          />
          <TextInput
            ref={component => (_inputPassword = component)}
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
            style={[styles.textInput, { textAlign: 'center' }]}
            placeholder='Password'
            blurOnSubmit={true}
            secureTextEntry
            textContentType='password'
            onSubmitEditing={() => {
              handleLogin;
            }}
          />
          <TouchableOpacity
            style={styles.LoginAction}
            disabled={isLoading}
            onPress={handleLogin}
          >
            <Text style={styles.actionText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.notRegisteredContainer}
            onPress={navigateToRegister}
          >
            <Text style={styles.notRegisteredText}>Don't have an account?</Text>
            <Text style={styles.notRegisteredText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
