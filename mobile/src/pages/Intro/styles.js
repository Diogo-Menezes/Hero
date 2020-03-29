import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    marginTop:32,
    alignItems: 'center'
  },
  heroesImg: {
    width: '100%',
    maxHeight: '55%',
    marginVertical: 32,
    resizeMode:"contain"
  },
  action: {
    marginVertical: 8,
    backgroundColor: colors.accentRed,
    width: '50%',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    textTransform:"uppercase",
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});
