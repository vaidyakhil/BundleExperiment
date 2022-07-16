import ORANGE_SCREENS from './screens';

type OrangeFeatureAParams = {
	configFeatureA: string;
};
type OrangeFeatureBParams = {};
type OrangeFeatureCParams = {};

type ORANGE_SCREEN_PARAMS_MAPPING = {
	[ORANGE_SCREENS.ORANGE_FEATURE_A]: OrangeFeatureAParams;
	[ORANGE_SCREENS.ORANGE_FEATURE_B]: OrangeFeatureBParams;
	[ORANGE_SCREENS.ORANGE_FEATURE_C]: OrangeFeatureCParams;
};

export default ORANGE_SCREEN_PARAMS_MAPPING;
