import produce from 'immer';
import {
  CHANGE_ANIMES,
  CHANGE_ORDER,
  CHANGE_SORT,
  CHANGE_VIEW,
} from './actionTypes';

const INITAL_STATE = {
  listMode: false,
  animes: null,
  orderBy: 0,
  sort: 0,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      draft.listMode = !draft.listMode;
      return;
    case CHANGE_ANIMES:
      draft.animes = action.animes;
      return;
    case CHANGE_ORDER:
      draft.orderBy = action.orderBy;
      return;
    case CHANGE_SORT:
      draft.sort = action.sort;
      return;
  }
}, INITAL_STATE);

export default reducer;
