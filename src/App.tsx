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
import SCREENS from './screens';
import SCREEN_MAPPING from './screenMapping';
import { Platform } from 'react-native';
import ScreenParamMapping from './screenParamsMapping/screenParamsMapping';

const MainStack = createNativeStackNavigator<ScreenParamMapping>();

const App = () => {
	return (
		<NavigationContainer>
			<MainStack.Navigator
				initialRouteName={SCREENS.APPLE_FEATURE_A}
				screenOptions={Platform.select({
					android: {
						// default looks weird, it kind of zooms in the screen than fades
						animation: 'fade',
					},
				})}
			>
				{Object.values(SCREEN_MAPPING).map(({ name, component }) => (
					<MainStack.Screen name={name} component={component} key={name} />
				))}
			</MainStack.Navigator>
		</NavigationContainer>
	);
};

export default App;
