import ScreenParamMapping from '../../screenParamsMapping';
import { AppScreenTypes, AppStackNavigationProp } from '../../types/navigation';
import { NavigationModule, NavigationType } from './types';

const NavigationServiceImpl: NavigationModule = {
	navigateTo: <RouteName extends AppScreenTypes>(
		navigation: AppStackNavigationProp,
		routeName: RouteName,
		params: ScreenParamMapping[RouteName],
		type: NavigationType.NAVIGATE | NavigationType.PUSH
	) => {
		switch (type) {
			case NavigationType.NAVIGATE:
				navigation && navigation.navigate(routeName, params);
				break;
			case NavigationType.PUSH:
				navigation && navigation.push(routeName, params);
				break;
			default:
				break;
		}
	},

	navigateBack: (
		navigation: AppStackNavigationProp,
		type: NavigationType.BACK | NavigationType.POP,
		count: number
	) => {
		switch (type) {
			case NavigationType.BACK:
				navigation && navigation.goBack();
				break;
			case NavigationType.POP:
				navigation && navigation.pop(count);
				break;
			default:
				break;
		}
	},

	navigateReplace: <RouteName extends AppScreenTypes>(
		navigation: AppStackNavigationProp,
		routeName: RouteName,
		params: ScreenParamMapping[RouteName]
	) => {
		navigation && navigation.replace(routeName, params);
	},

	resetNavigationStack: (navigation: AppStackNavigationProp, routes: { name: AppScreenTypes; params: any }[]) => {
		navigation.reset({ routes });
	},
};

export default NavigationServiceImpl;
