import FeatureAScreen from '../featureA';
import FeatureBScreen from '../featureB';
import FeatureCScreen from '../featureC';

import MANGO_SCREENS from './screens';

const MANGO_SCREEN_MAPPING = [
	{
		name: MANGO_SCREENS.MANGO_FEATURE_A,
		component: FeatureAScreen,
	},
	{
		name: MANGO_SCREENS.MANGO_FEATURE_B,
		component: FeatureBScreen,
	},
	{
		name: MANGO_SCREENS.MANGO_FEATURE_C,
		component: FeatureCScreen,
	},
];

export default MANGO_SCREEN_MAPPING;
