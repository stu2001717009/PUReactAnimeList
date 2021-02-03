import { useEffect } from 'react';
import AnimeService from '../services/animeService';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_ANIMES } from '../store/actionTypes';
import AnimeCards from './animeCard';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { Menu, ViewModule } from '@material-ui/icons';
import * as actionTypes from '../store/actionTypes';
import {
  orderMenuItems,
  sortMenuItems,
  orderArr,
  sortArr,
} from '../common/constants';
import { makeStyles } from '@material-ui/core/styles';
import AnimeList from './animeList';

const animeService = new AnimeService();

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function AnimeListContainer() {
  const dispatch = useDispatch();
  const orderBy = useSelector((store: any) => store.common.orderBy);
  const sort = useSelector((store: any) => store.common.sort);
  const animes = useSelector((store: any) => store.common.animes);
  const listMode = useSelector((store: any) => store.common.listMode);
  const classes = useStyles();

  const getAnimes = () => {
    animeService
      .getAllAnimes(orderArr[orderBy], sortArr[sort])
      .then((res) => dispatch({ type: CHANGE_ANIMES, animes: res.anime }))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnimes();
  }, [orderBy, sort]);

  const changeOrder = (event) =>
    dispatch({ type: actionTypes.CHANGE_ORDER, orderBy: event.target.value });

  const changeSort = (event) =>
    dispatch({ type: actionTypes.CHANGE_SORT, sort: event.target.value });

  return (
    <div className="anime-container">
      <div className="filters">
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel>Order By</InputLabel>
            <Select value={orderBy} onChange={changeOrder}>
              {orderMenuItems().map((r, indx) => (
                <MenuItem value={indx} key={indx + r}>
                  {r}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Sort</InputLabel>
            <Select value={sort} onChange={changeSort}>
              {sortMenuItems().map((r, indx) => (
                <MenuItem value={indx} key={indx + r}>
                  {r}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div
          className="toggle-view"
          onClick={() => dispatch({ type: actionTypes.CHANGE_VIEW })}
        >
          {listMode ? (
            <ViewModule fontSize="large" />
          ) : (
            <Menu fontSize="large" />
          )}
        </div>
      </div>
      <div>
        {listMode ? (
          <AnimeList animes={animes} />
        ) : (
          <AnimeCards animes={animes} />
        )}
      </div>
    </div>
  );
}

export default AnimeListContainer;
