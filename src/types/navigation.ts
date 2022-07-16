import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import ScreenParamMapping from '../screenParamsMapping/screenParamsMapping';

export type AppScreenTypes = keyof ScreenParamMapping;

/**
 * @desciption: Wrapper over the `navigation` prop
 */
export type AppStackNavigationProp = NativeStackNavigationProp<ScreenParamMapping, AppScreenTypes>;

/**
 * @desciption: Wrapper over the `route` prop
 */
export type AppStackRouteProp = RouteProp<ScreenParamMapping, AppScreenTypes>;

/**
 * @description: All App Screens should be of this type
 * @param: RouteName is the route of your screen, this should come from SCREENS object
 * @param: AdditionalScreenProps are what we expect from any HOC that is wrapping our component
 * @param: ClassComponentState is state object for legacy Class based screens
 */
export type AppStackScreen<
	RouteName extends AppScreenTypes,
	AdditionalScreenProps extends {} = {},
	ClassComponentState extends {} = {}
> =
	| React.FC<NativeStackScreenProps<ScreenParamMapping, RouteName> & AdditionalScreenProps>
	| React.Component<
			NativeStackScreenProps<ScreenParamMapping, RouteName> & AdditionalScreenProps,
			ClassComponentState
	  >;
