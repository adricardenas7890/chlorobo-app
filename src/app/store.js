import { configureStore } from '@reduxjs/toolkit';
import viewPageReducer from '../Components/Pages/Content/contentSlice';
import puzzlePageReducer from '../Components/Pages/PuzzlePage/puzzlePageSlice';

//import viewPageReducer from '../Components/Shared/viewPageSlice';
//import puzzleOne from '../Components/PuzzleOne/puzzleOneSlice';
//import puzzleTwo from '../Components/PuzzleTwo/puzzleTwo';
//import puzzleThree from '../Components/PuzzleThree/puzzleThree';
//import puzzleFour from '../Components/PuzzleFour/puzzleFour';
//import puzzleFive from '../Components/PuzzleFive/puzzleFive';
//import puzzleSix from '../Components/PuzzleSix/puzzleSix';
//imprt puzzleSeven from '../Components/PuzzleSeven/puzzleSeven';

export default configureStore({
  reducer: {
    currentViewPage: viewPageReducer,
    currentPuzzle: puzzlePageReducer
    //puzzleOne: puzzleOneReducer,
    //puzzleTwo: puzzleTwoReducer,
    //puzzleThree: puzzleThreeReducer,
    //puzzleFour: puzzleFourReducer,
    //puzzleFive: puzzleFiveReducer,
    //puzzleSix: puzzleSixReducer,
    //puzzleSeven: puzzleSevenReducer,
    //puzzleEight: puzzleEightReducer,
  },
});