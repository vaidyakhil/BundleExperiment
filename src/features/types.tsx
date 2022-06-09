import { NavigationProp, Route } from '@react-navigation/native';
import React from 'react';

export type ScreenProps = {
	navigation: NavigationProp<any, any, any, any, any>;
	route: Route<any>;
};

export type AppScreens = React.FC<ScreenProps>;
