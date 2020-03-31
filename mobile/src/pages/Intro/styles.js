import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    marginTop: 32,
    alignItems: 'center'
  },
  heroesImg: {
    width: '100%',
    maxHeight: '55%',
    marginVertical: 24,
    resizeMode: 'contain'
  },
  actionContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  action: {
    marginVertical: 8,
    backgroundColor: colors.accentRed,
    width: '60%',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  ngoLoginContainer: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: "center"
  },
  ngoText: {
    color: colors.accentRed,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingLeft: 4
  }
});
