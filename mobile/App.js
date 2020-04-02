import 'intl';
import 'intl/locale-data/jsonp/pt-PT';

import React from 'react';
import Routes from './routes';
import { View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content'/>
      <Routes />
    </View>
  );
}
