import MANGO_SCREENS from './screens';

type MangoFeatureAParams = {};
type MangoFeatureBParams = {};
type MangoFeatureCParams = {};

type MANGO_SCREEN_PARAMS_MAPPING = {
	[MANGO_SCREENS.MANGO_FEATURE_A]: MangoFeatureAParams;
	[MANGO_SCREENS.MANGO_FEATURE_B]: MangoFeatureBParams;
	[MANGO_SCREENS.MANGO_FEATURE_C]: MangoFeatureCParams;
};

export default MANGO_SCREEN_PARAMS_MAPPING;
