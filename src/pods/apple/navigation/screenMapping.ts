import FeatureAScreen from '../featureA';
import FeatureBScreen from '../featureB';
import FeatureCScreen from '../featureC';

import APPLE_SCREENS from './screens';

const APPLE_SCREEN_MAPPING = [
	{
		name: APPLE_SCREENS.APPLE_FEATURE_A,
		component: FeatureAScreen,
	},
	{
		name: APPLE_SCREENS.APPLE_FEATURE_B,
		component: FeatureBScreen,
	},
	{
		name: APPLE_SCREENS.APPLE_FEATURE_C,
		component: FeatureCScreen,
	},
];

export default APPLE_SCREEN_MAPPING;
