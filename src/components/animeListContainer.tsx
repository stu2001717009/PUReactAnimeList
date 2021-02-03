import React, { useEffect } from 'react';
import AnimeService from '../services/animeService';
import { useDispatch } from 'react-redux';
import { CHANGE_ANIMES } from '../store/actionTypes';
import AnimeListCard from './animeListCard';

const animeService = new AnimeService();

function AnimeListContainer() {
  const dispatch = useDispatch();

  const getAnimes = () => {
    animeService
      .getAllAnimes('ascending', 'title')
      .then((res) => dispatch({ type: CHANGE_ANIMES, animes: res.anime }))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnimes();
  }, []);
  return <AnimeListCard />;
}

export default AnimeListContainer;
