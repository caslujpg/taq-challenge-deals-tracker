import React, { useState, useEffect, useCallback } from 'react';

import { Home } from './src/pages/Home';

import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold
} from '@expo-google-fonts/open-sans';

export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
    
  }, [])


  if(!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
    return (
      <Home />  
    );
  }
}