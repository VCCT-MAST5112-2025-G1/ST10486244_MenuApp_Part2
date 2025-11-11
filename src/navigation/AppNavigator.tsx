import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootTabParamList, RootStackParamList } from '../types/types';
import HomeScreen from '../screens/HomeScreen';
import AddMenuItemScreen from '../screens/AddMenuItemScreen';
import GuestFilterScreen from '../screens/GuestFilterScreen';
import { styles } from '../styles/Styles';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === 'Home') iconName = focused ? 'restaurant' : 'restaurant-outline';
          else if (route.name === 'AddItem') iconName = focused ? 'add-circle' : 'add-circle-outline';
          else if (route.name === 'Guest') iconName = focused ? 'filter' : 'filter-outline';
          else iconName = 'help-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff7043',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Menu' }} />
      <Tab.Screen name="Guest" component={GuestFilterScreen} options={{ title: 'Guest' }} />
      <Tab.Screen name="AddItem" component={AddMenuItemScreen} options={{ title: 'Add Item' }} />
    </Tab.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;