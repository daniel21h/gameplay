import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useFonts } from 'expo-font'
import {
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'

import { AuthProvider } from './src/hooks/auth';

import { Background } from './src/components/Background'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </Background>
  );
}

/** Ignore warnings on terminal */
// import { LogBox } from 'react-native
// 
// LogBox.ignoreLogs([<'Initial Name Warning'>])
// 
/** Ignore warnings on terminal */