import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.accentRed
  },
  header: {
    height: '25%',
    flexDirection: 'row',
    alignItems:"center"
  },
  heroesImg: {
    flex:1,
    resizeMode:"contain"
  },
  inputContainer: {
    marginTop: 50,
    backgroundColor: colors.white25percent,
    alignItems: 'center',
    borderRadius: 12,
    paddingBottom: 16
  },
  inputLabel: {
    marginVertical: 16,
    fontSize: 18,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    color: 'white'
  },
  textInput: {
    borderRadius: 8,
    fontSize: 16,
    width: '70%',
    padding: 8,
    fontWeight: 'bold',
    backgroundColor: 'white',
    marginBottom: 16
  },
  LoginAction: {
    backgroundColor: colors.accentRed,
    width: '70%',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
    shadowColor: 'black',
    elevation: 12
  },
  actionText: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  notRegisteredContainer: {
    alignSelf: 'stretch'
  },
  notRegisteredText: {
    alignSelf: 'center',
    lineHeight: 22,
    color: 'white',
    fontSize: 14
  }
});
