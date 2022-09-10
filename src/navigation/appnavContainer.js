import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PackagesList from '../screens/PackagesList';

const AppStack = () => {
  const AppStack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <AppStack.Navigator screenOptions={screenOptions}>
      <AppStack.Screen name="Packages List" component={PackagesList} />
    </AppStack.Navigator>
  );
};

export default AppStack;
