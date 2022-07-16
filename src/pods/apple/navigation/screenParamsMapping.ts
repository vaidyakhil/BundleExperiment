import APPLE_SCREENS from './screens';

type AppleFeatureAParams = {};
type AppleFeatureBParams = {};
type AppleFeatureCParams = {};

type APPLE_SCREEN_PARAMS_MAPPING = {
	[APPLE_SCREENS.APPLE_FEATURE_A]: AppleFeatureAParams;
	[APPLE_SCREENS.APPLE_FEATURE_B]: AppleFeatureBParams;
	[APPLE_SCREENS.APPLE_FEATURE_C]: AppleFeatureCParams;
};

export default APPLE_SCREEN_PARAMS_MAPPING;
