import  { combineReducers} from 'redux';
//Imports can be renamed on the fly!
import {reducer as formReducer} from "redux-form";

import authReducer from "./authReducer";
import streamsReducer from "./streamsReducer";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamsReducer
});