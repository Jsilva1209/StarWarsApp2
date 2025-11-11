import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Platform } from 'react-native';
import FilmsScreen from '../screens/FilmsScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import SpaceshipsScreen from '../screens/SpaceshipsScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Planets" component={PlanetsScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
    </Tab.Navigator>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Planets" component={PlanetsScreen} />
      <Drawer.Screen name="Spaceships" component={SpaceshipsScreen} />
      <Drawer.Screen name="Films" component={FilmsScreen} />
    </Drawer.Navigator>
  );
}

export default function RootNavigator() {
  return Platform.OS === 'ios' ? <Tabs /> : <DrawerNav />;
}