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
  Alert,
  ScrollView,
  Platform
} from 'react-native';
import screens from '../../config/navigation';
import logoImg from '../../../assets/icon.png';

import styles from './styles';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigation();

  function checkInputs() {
    if (name.length === 0) {
      Alert.alert('name', 'Please insert your name');
      return false;
    }
    if (password.length === 0) {
      Alert.alert('Password', 'Please insert your password');
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert('Password', `Passwords don't match`);
      return false;
    }
    return true;
  }

  async function handleRegister() {
    if (isLoading) return;
    if (!checkInputs()) return;
    setIsLoading(true);

    //TODO add password support
    await api
      .post('/ong', { name, email, whatsapp, city, password })
      //Redirect to NGO dashboard save the "token"
      .then(resp => {
        console.log(resp);
        if (resp.token) navigateToIncidents;
      })
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

  function navigateToIncidents() {
    nav.navigate(screens.OngIncidents);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'position' : 'height'}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => nav.goBack()}>
              <Feather name='arrow-left' size={28} color='white' />
            </TouchableOpacity>
            <Image style={styles.heroesImg} source={logoImg} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
              Please enter your details below
            </Text>
            <TextInput
              value={name}
              onChangeText={value => {
                setName(value);
              }}
              style={[styles.textInput, { textAlign: 'center' }]}
              placeholder='Ong name'
              blurOnSubmit={false}
              returnKeyType='next'
              onSubmitEditing={() => {
                _inputPassword.focus();
              }}
            />
            <TextInput
              value={email}
              onChangeText={value => setEmail(value)}
              style={[styles.textInput, { textAlign: 'center' }]}
              placeholder='Email'
              textContentType='emailAddress'
              blurOnSubmit={false}
            />
            <TextInput
              value={whatsapp}
              onChangeText={value => {
                setWhatsapp(value);
              }}
              style={[styles.textInput, { textAlign: 'center' }]}
              placeholder='Whatsapp'
              blurOnSubmit={false}
              textContentType='telephoneNumber'
              onSubmitEditing={() => {
                handleRegister;
              }}
            />
            <TextInput
              value={city}
              onChangeText={value => {
                setCity(value);
              }}
              style={[styles.textInput, { textAlign: 'center' }]}
              placeholder='City'
              textContentType='location'
            />
            <TextInput
              value={password}
              onChangeText={value => {
                setPassword(value);
              }}
              style={[styles.textInput, { textAlign: 'center' }]}
              placeholder='Password'
              textContentType='password'
              secureTextEntry
            />
            <TextInput
              value={confirmPassword}
              onChangeText={value => {
                setConPassword(value);
              }}
              style={[styles.textInput, { textAlign: 'center' }]}
              placeholder='Confirm password'
              textContentType='password'
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.LoginAction}
              disabled={isLoading}
              onPress={handleRegister}
            >
              <Text style={styles.actionText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
