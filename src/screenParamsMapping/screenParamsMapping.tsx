import ORANGE_SCREEN_PARAMS_MAPPING from '../pods/orange/navigation/screenParamsMapping';
import APPLE_SCREEN_PARAMS_MAPPING from '../pods/apple/navigation/screenParamsMapping';
import MANGO_SCREEN_PARAMS_MAPPING from '../pods/mango/navigation/screenParamsMapping';
import LICHI_SCREEN_PARAMS_MAPPING from '../pods/lichi/navigation/screenParamsMapping';

type ScreenParamMapping = APPLE_SCREEN_PARAMS_MAPPING &
	LICHI_SCREEN_PARAMS_MAPPING &
	MANGO_SCREEN_PARAMS_MAPPING &
	ORANGE_SCREEN_PARAMS_MAPPING;

export default ScreenParamMapping;
