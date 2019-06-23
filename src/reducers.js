import {CHANGE_NAME} from './constants';

const initialState = {};

export const mainReducer = (state = initialState , action={}) => {
	switch(action.type){
		case CHANGE_NAME: 
			return {...state ,name: action.payload};

		default:
		    return state;
	}
}