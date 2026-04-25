import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  Epilogue_700Bold,
  Epilogue_900Black,
} from '@expo-google-fonts/epilogue';
import {
  Manrope_400Regular,
  Manrope_600SemiBold,
  Manrope_700Bold,
} from '@expo-google-fonts/manrope';

SplashScreen.preventAutoHideAsync();

export function useAppFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await Font.loadAsync({
        EpilogueBold: Epilogue_700Bold,
        EpilogueBlack: Epilogue_900Black,
        ManropeRegular: Manrope_400Regular,
        ManropeSemiBold: Manrope_600SemiBold,
        ManropeBold: Manrope_700Bold,
      });
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    }
    load();
  }, []);

  return fontsLoaded;
}