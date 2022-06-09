import * as _ from 'lodash';
import { ArrayUtility } from './type';

const ArrayUtils: ArrayUtility = {
	isEmpty: (arr: any[]) => {
		return _.isEmpty(arr);
	},
};

export { ArrayUtils };
