import FeatureAScreen from '../featureA';
import FeatureBScreen from '../featureB';
import FeatureCScreen from '../featureC';

import LICHI_SCREENS from './screens';

const LICHI_SCREEN_MAPPING = [
	{
		name: LICHI_SCREENS.LICHI_FEATURE_A,
		component: FeatureAScreen,
	},
	{
		name: LICHI_SCREENS.LICHI_FEATURE_B,
		component: FeatureBScreen,
	},
	{
		name: LICHI_SCREENS.LICHI_FEATURE_C,
		component: FeatureCScreen,
	},
];

export default LICHI_SCREEN_MAPPING;
