import { configureStore, combineReducers } from '@reduxjs/toolkit';
import viewPageReducer from '../Components/Pages/Content/contentSlice';
import puzzlePageReducer from '../Components/Elements/Puzzles/puzzlePageSlice';
import puzzleProgressReducer from '../Components/Elements/Puzzles/puzzleProgressSlice'
import temperantiaReducer from '../Components/Elements/Puzzles/Temperantia/temperantiaSlice';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Which reducers will be persisted
const persistConfig = { 
  key: 'root',
  storage,
  whitelist: ['currentPuzzleProgress', 'currentTempProgress', 'currentViewPage', 'currentPuzzle' ]
}

// abstract from configureStore
const rootReducer = combineReducers({
  currentViewPage: viewPageReducer,
  currentPuzzle: puzzlePageReducer,
  currentPuzzleProgress: puzzleProgressReducer,
  currentTempProgress: temperantiaReducer,
});

// Persists selected reducers within localStorage
const persistedReducers = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducers
});
export const persistor = persistStore(store);


