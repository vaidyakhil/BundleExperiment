import LoginScreen from '../features/login';
import SignupScreen from '../features/signup';
import { SCREENS } from '../screens/screens';
import { AppScreens } from '../features/types';

const SCREEN_REGISTRY: { [key in SCREENS]: AppScreens } = {
	[SCREENS.SIGNUP]: SignupScreen,
	[SCREENS.LOGIN]: LoginScreen,
};

export { SCREEN_REGISTRY };
