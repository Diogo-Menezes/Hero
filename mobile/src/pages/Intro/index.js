import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png';
import heroesImg from '../../assets/heroes.png';
import styles from './styles';

import screens from '../../config/navigation';

export default function Intro() {
  const nav = useNavigation();

  function ngoRoute() {
    nav.navigate(screens.Login);
  }
  function heroRoute() {
    nav.navigate(screens.Incidents);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Image style={styles.heroesImg} source={heroesImg} />
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.action} onPress={heroRoute}>
            <Text style={styles.actionText}>Hero</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ngoAction} onPress={ngoRoute}>
            <View style={styles.ngoLoginContainer}>
              <Feather style={styles.ngoText} name='log-in' size={15} />
              <Text style={styles.ngoText}> NGO Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
