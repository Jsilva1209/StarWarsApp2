import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainNavigation from './navigation/MainNavigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
