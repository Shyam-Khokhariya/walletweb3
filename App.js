import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useWalletConnect,
  withWalletConnect,
} from '@walletconnect/react-native-dapp';
import * as React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

function App() {
  const connector = useWalletConnect();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#010A2B'} barStyle="light-content" />
      <ImageBackground
        source={require('./assets/background_blue.png')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/wallet_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>Wallet Messenger</Text>
        </View>
        <View style={styles.walletContainer}>
          {connector.connected && connector?.accounts[0] && (
            <>
              <Text style={styles.wallet}>Connected Wallet Address</Text>
              <Text style={styles.walletAddress}>{connector?.accounts[0]}</Text>
            </>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              connector.connected
                ? connector.killSession()
                : connector.connect()
            }>
            <Text style={styles.buttonText}>
              {connector.connected ? 'Disconnect' : 'Connect Wallet'}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default withWalletConnect(App, {
  redirectUrl: Platform.OS === 'web' ? window.location.origin : 'walletweb3://',
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});
