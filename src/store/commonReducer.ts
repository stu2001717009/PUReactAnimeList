import produce from 'immer';
import { CHANGE_ANIMES, CHANGE_VIEW } from './actionTypes';

// Reducer with inital state
const INITAL_STATE = {
  listMode: false,
  animes: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      draft.listMode = !draft.listMode;
      return;
    case CHANGE_ANIMES:
      draft.animes = action.animes;
      return;
  }
}, INITAL_STATE);

export default reducer;
