import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalSlice from './slice/modalSlice';

const rootReducer = combineReducers({ modal: modalSlice });

export const store = configureStore({ reducer: rootReducer });