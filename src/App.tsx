/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from './screens';
import { SCREEN_REGISTRY } from './screen_registry';
import { Platform } from 'react-native';

const MainStack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<MainStack.Navigator
				initialRouteName={SCREENS.SIGNUP}
				screenOptions={Platform.select({
					android: {
						// default looks weird, it kind of zooms in the screen than fades
						animation: 'fade',
					},
				})}
			>
				{Object.values(SCREENS).map((screenName: SCREENS) => (
					<MainStack.Screen name={screenName} component={SCREEN_REGISTRY[screenName]} key={screenName} />
				))}
			</MainStack.Navigator>
		</NavigationContainer>
	);
};

export default App;
