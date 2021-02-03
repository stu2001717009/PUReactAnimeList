import React from 'react';
import { useSelector } from 'react-redux';
import { AnimeModel } from '../models/animeModel';

function AnimeListCard() {
  const animes: Array<AnimeModel> = useSelector(
    (store: any) => store.common.animes
  );
  return <div>{animes ? animes.map((r) => <div>{r.title}</div>) : null}</div>;
}

export default AnimeListCard;
