import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from '../screens/screenA';
import ScreenB from '../screens/screenB';
import ScreenC from '../screens/screenC';

const Stack = createStackNavigator();

const MyStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      //   cardStyleInterpolator: ({current: {progress}}) => ({
      //     cardStyle: {
      //       opacity: progress.interpolate({
      //         inputRange: [0, 1],
      //         outputRange: [0, 1],
      //       }),
      //       transform: [
      //         {
      //           perspective: 1000,
      //         },
      //         {
      //           rotateY: progress.interpolate({
      //             inputRange: [0, 1],
      //             outputRange: ['180deg', '0deg'],
      //           }),
      //         },
      //         {
      //           scale: progress.interpolate({
      //             inputRange: [0, 1],
      //             outputRange: [0.5, 1],
      //           }),
      //         },
      //       ],
      //     },
      //   }),
      // }}
      >
        <Stack.Screen name="screenA" component={ScreenA} />
        <Stack.Screen name="screenB" component={ScreenB} />
        <Stack.Screen name="screenC" component={ScreenC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStackNavigation;
