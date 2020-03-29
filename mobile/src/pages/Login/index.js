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
  ScrollView
} from 'react-native';
import logoImg from '../../assets/logo.png';
import iconPng from '../../../assets/icon.png';

import styles from './styles';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    console.log('Login called');
    api.get('/ongs');
  }
  function navigateToRegister() {}

  return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={iconPng} />
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
            blurOnSubmit={true}
          />
          <TextInput
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
            style={[styles.textInput, { textAlign: 'center' }]}
            placeholder='Password'
            blurOnSubmit={true}
          />
          <TouchableOpacity
            style={styles.LoginAction}
            onPress={navigateToRegister}
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
      </View>

  );
}
