import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actionCreators } from '../state/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();

  // return bindActionCreators(actionCreators, dispatch);
  // above one returns all our action's with attaching the dispatch function
  // { searchRepositories: dispatch(searchRepositories)}
};
