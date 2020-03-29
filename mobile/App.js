import 'intl';
import 'intl/locale-data/jsonp/pt-PT';

import React from 'react';
import { Text, View } from 'react-native';
import Routes from './routes';
import Login from './src/pages/Login/index';
import Incidents from './src/pages/Incidents/index';

export default function App() {
  return <Login />;
  //  <Routes />;
}
