import { configureStore } from '@reduxjs/toolkit';
import viewPageReducer from '../Components/Pages/Content/contentSlice';
import puzzlePageReducer from '../Components/Elements/Puzzles/puzzlePageSlice';
import puzzleProgressReducer from '../Components/Elements/Puzzles/puzzleProgressSlice'
import temperantiaReducer from '../Components/Elements/Puzzles/Temperantia/temperantiaSlice';
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers' // Root reducer


const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer

const store = createStore(
    persistReducer, // pass the persisted reducer instead of rootReducer to createStore
    applyMiddleware() // add any middlewares here
)

const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

configureStore({
  reducer: {
    currentViewPage: viewPageReducer,
    currentPuzzle: puzzlePageReducer,
    currentPuzzleProgress: puzzleProgressReducer,
    currentTempProgress : temperantiaReducer,
  },
});

export {store, persistor }


  
