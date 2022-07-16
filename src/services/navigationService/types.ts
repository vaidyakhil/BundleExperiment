import ScreenParamMapping from '../../screenParamsMapping';
import { AppScreenTypes, AppStackNavigationProp } from '../../types/navigation';

export enum NavigationType {
	NAVIGATE = 'navigate',
	REPLACE = 'replace',
	PUSH = 'push',
	BACK = 'back',
	POP = 'pop',
}

export interface NavigationModule {
	navigateTo: <RouteName extends AppScreenTypes>(
		navigation: AppStackNavigationProp,
		routeName: RouteName,
		params: ScreenParamMapping[RouteName],
		type: NavigationType.NAVIGATE | NavigationType.PUSH
	) => void;

	navigateBack: (
		navigation: AppStackNavigationProp,
		type: NavigationType.BACK | NavigationType.POP,
		count: number
	) => void;

	navigateReplace: <RouteName extends AppScreenTypes>(
		navigation: AppStackNavigationProp,
		routeName: RouteName,
		params: ScreenParamMapping[RouteName]
	) => void;

	resetNavigationStack: (navigation: AppStackNavigationProp, routes: { name: AppScreenTypes; params: any }[]) => void;
}
