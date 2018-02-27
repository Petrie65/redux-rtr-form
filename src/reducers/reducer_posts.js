import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_POSTS:
			// Input: [array]
			return _.mapKeys(action.payload.data, 'id');
			// Output: {Object}
		default:
			return state;
	}
}
