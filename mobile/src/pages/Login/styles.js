import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: colors.grey
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  heroesImg: {
    width: '100%',
    maxHeight: '50%',
    marginTop: 32
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center'
  },
  textInput: {
    borderRadius: 8,
    marginVertical: 32,
    fontSize: 16,
    width: '60%',
    padding: 8,
    backgroundColor: 'white'
  },
  LoginAction: {
    backgroundColor: colors.accentRed,
    width: '50%',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});
