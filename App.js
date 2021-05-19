import React from 'react';
import 
{ useFonts, 
  Nunito_600SemiBold, 
  Nunito_700Bold, 
  Nunito_800ExtraBold,
  Nunito_300Light, 
  Nunito_400Regular
} from '@expo-google-fonts/nunito';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import AppLoading from 'expo-app-loading';
import StackNavigation from './src/routes/stackNavigation';
import StatusBar from './src/config/statusBar';

export default function App() {
  const [loadedFonts] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_300Light,
    Nunito_400Regular
  });

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#dc143c',
      accent: '#f1c40f',
    },
  };

  if(!loadedFonts) {
    return <AppLoading />
  };

  return(
    <PaperProvider theme={theme}>
      <StatusBar />
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StackNavigation />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
};