import store from '../app/store'
import { ReactReduxContext } from 'react-redux';
import { useContext } from 'react';

const StateSlice = (state=store) => {
    useContext(ReactReduxContext)

}

export default StateSlice;
