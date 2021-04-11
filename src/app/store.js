import { configureStore, combineReducers } from '@reduxjs/toolkit';
import viewPageReducer from '../Components/Pages/Content/contentSlice';
import puzzlePageReducer from '../Components/Elements/Puzzles/puzzlePageSlice';
import puzzleProgressReducer from '../Components/Elements/Puzzles/puzzleProgressSlice'
import temperantiaReducer from '../Components/Elements/Puzzles/Temperantia/temperantiaSlice';
import cookieReducer from '../LocalStorage/cookieSlice';
import audioReducer from '../Components/Elements/Puzzles/puzzleSongSlice';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

// Which reducers will be persisted
const persistConfig = { 
  key: 'root',
  storage,
  whitelist: ['currentPuzzleProgress', 'currentTempProgress', 'cookieConsent']
}


// abstract from configureStore
const rootReducer = combineReducers({
  currentViewPage: viewPageReducer,
  currentPuzzle: puzzlePageReducer,
  currentPuzzleProgress: puzzleProgressReducer,
  currentTempProgress: temperantiaReducer,
  cookieConsent: cookieReducer,
  currentAudioSettings: audioReducer,
});

// Persists selected reducers within localStorage
const persistedReducers = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);


