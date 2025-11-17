import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import MainNavigation from './navigation/MainNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
