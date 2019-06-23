import {CHANGE_NAME} from './constants';

export const changeName = (payload) => {
	return ({
		type: CHANGE_NAME,
		payload
	});
};
