import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// below one says return whatever the function reducers gives and store it inside rootstate

export type RootState = ReturnType<typeof reducers>;
