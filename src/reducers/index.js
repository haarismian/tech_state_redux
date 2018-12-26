import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  //this is just a name, not actual libraries in any way
  libraries: LibraryReducer
});
