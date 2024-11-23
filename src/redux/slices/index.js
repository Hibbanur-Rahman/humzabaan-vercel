import { combineReducers } from "@reduxjs/toolkit";
import downloadModalReducer from './downloadModal/downloadModalSlice';
const rootReducer=combineReducers({
    downloadModal:downloadModalReducer,
});

export default rootReducer;