import FeatureAScreen from '../featureA';
import FeatureBScreen from '../featureB';
import FeatureCScreen from '../featureC';

import ORANGE_SCREENS from './screens';

const ORANGE_SCREEN_MAPPING = [
	{
		name: ORANGE_SCREENS.ORANGE_FEATURE_A,
		component: FeatureAScreen,
	},
	{
		name: ORANGE_SCREENS.ORANGE_FEATURE_B,
		component: FeatureBScreen,
	},
	{
		name: ORANGE_SCREENS.ORANGE_FEATURE_C,
		component: FeatureCScreen,
	},
];

export default ORANGE_SCREEN_MAPPING;
