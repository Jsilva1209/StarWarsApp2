import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';

import FilmsScreen from '../screens/FilmsScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import SpaceshipsScreen from '../screens/SpaceshipsScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return Platform.OS === 'ios' ? (
    <Tab.Navigator>
      <Tab.Screen name="Planets" component={PlanetsScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
    </Tab.Navigator>
  ) : (
    <Drawer.Navigator>
      <Drawer.Screen name="Planets" component={PlanetsScreen} />
      <Drawer.Screen name="Films" component={FilmsScreen} />
      <Drawer.Screen name="Spaceships" component={SpaceshipsScreen} />
    </Drawer.Navigator>
  );
}
