import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010A2B',
  },
  backgroundImage: {
    flex: 1,
  },
  logoContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 210,
  },
  logoText: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 22,
    color: '#FFFFFF',
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1.5,
  },
  walletContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wallet: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 22,
    color: '#ffffff',
  },
  walletAddress: {
    marginHorizontal: 20,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 22,
    color: '#1F81E1',
  },
  button: {
    backgroundColor: '#1F81E1',
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 70,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 22,
    color: '#FFFFFF',
  },
});
