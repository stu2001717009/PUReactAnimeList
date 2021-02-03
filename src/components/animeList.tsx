import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AnimeModel } from '../models/animeModel';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const AnimeList = ({ animes }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Number of episodes</TableCell>
            <TableCell>Start date</TableCell>
            <TableCell>End date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {animes.map((row: AnimeModel) => (
            <TableRow key={row.mal_id}>
              <TableCell component="th" scope="row">
                <img src={row.image_url} width={50} height={70} />
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.score}</TableCell>
              <TableCell>
                {row.total_episodes ? row.total_episodes : 'Still going'}
              </TableCell>
              <TableCell>{row.start_date.slice(0, 10)}</TableCell>
              <TableCell>
                {row.end_date ? row.end_date.slice(0, 10) : 'Still going'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnimeList;
