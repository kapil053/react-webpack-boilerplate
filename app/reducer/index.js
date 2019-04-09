import { combineReducers } from 'redux';
import test from './test';
import amar from './amar';

const reducers = combineReducers({
	test,
	amar
});

export default reducers;
