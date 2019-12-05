import { combineReducers } from 'redux';
import database from './database/reducer';
import app from './app/ducks';

export default combineReducers({
    database,
    app
});