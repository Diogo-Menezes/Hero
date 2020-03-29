import React, { useEffect, useState } from 'react';

import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }
    setLoading(true);
    const response = await api.get('incidents', {
      params: { page }
    });
    setIncidents([...incidents,...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total<Text style={styles.headerTextBold}> {total} cases</Text>.
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>
          Please chose one of todays cases and save the day
        </Text>
      </View>
      <FlatList
        style={styles.IncidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        // showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.Incident}>
            <Text style={styles.IncidentProperty}>ONG:</Text>
            <Text style={styles.IncidentValue}>{incident.name}</Text>
            <Text style={styles.IncidentProperty}>Incident:</Text>
            <Text style={styles.IncidentValue}>{incident.title}</Text>
            <Text style={styles.IncidentProperty}>Value:</Text>
            <Text style={styles.IncidentValue}>
              {Intl.NumberFormat('pt-PT', {
                style: 'currency',
                currency: 'EUR'
              }).format(incident.value)}
            </Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>See more details.</Text>
              <Feather name='arrow-right' size={16} color='#E02041' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
