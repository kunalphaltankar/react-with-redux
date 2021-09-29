import { combineReducers } from 'redux';

import accounts from './accounts';

const reducers = combineReducers({
    accounts: accounts
})

export default reducers;