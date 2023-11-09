import { configureStore } from '@reduxjs/toolkit'
import likeReducer from '../redux/likeReducer'
import AudioPlayReducer from './AudioPlayReducer';
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  like:likeReducer ,
  audio: AudioPlayReducer
});

const persistConfig = {
  key: "key",
  root: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer:persistedReducer
})

export default store