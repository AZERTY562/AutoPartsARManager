import React from 'react';
import { AppRegistry } from 'react-native';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

AppRegistry.registerComponent('Main', () => MyApp);
AppRegistry.runApplication('Main', { rootTag: document.getElementById('__next') });

export default MyApp;

