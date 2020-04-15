import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Home from './src/pages/Home';
import Settings from './src/pages/Settings';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
    </NativeRouter>
  );
}

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
