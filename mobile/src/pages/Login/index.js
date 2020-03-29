import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import logoImg from '../../assets/logo.png';
import heroesImg from '../../assets/heroes.png';
import styles from './styles';

export default function Login() {
  const [id, setId] = useState('');

  function handleLogin() {
    console.log('Login called');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>
      <View style={styles.inputContainer}>
        <Image style={styles.heroesImg} source={heroesImg} />
        <TextInput
          value={id}
          onChangeText={value => {
            setId(value);
          }}
          style={styles.textInput}
          placeholder='NGO ID'
        />
        <TouchableOpacity
          style={styles.LoginAction}
          onPress={() => {
            handleLogin;
          }}
        >
          <Text style={styles.actionText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
