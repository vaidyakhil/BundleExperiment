import LoginScreen from './login';
import SignupScreen from './signup';
import { SCREENS } from './screen_list';
import { AppScreens } from './types';

const SCREEN_REGISTRY: { [key in SCREENS]: AppScreens } = {
	[SCREENS.SIGNUP]: SignupScreen,
	[SCREENS.LOGIN]: LoginScreen,
};

export { SCREEN_REGISTRY };
