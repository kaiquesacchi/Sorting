import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
    </NativeRouter>
  );
}
