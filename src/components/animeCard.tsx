import { AnimeModel } from '../models/animeModel';
import { Rating } from '@material-ui/lab';

function AnimeCards({ animes }) {
  return (
    <div className="anime-container-card">
      {animes
        ? animes.map((r: AnimeModel) => (
            <div key={r.mal_id} className="anime-card">
              <img src={r.image_url} alt={r.title} width={220} height={300} />
              <div className="anime-item-content">
                <h5>{r.title}</h5>
                <Rating defaultValue={+r.score / 2} readOnly precision={0.5} />
                <div>
                  Number of episodes:{' '}
                  {r.total_episodes ? r.total_episodes : 'Still going'}
                </div>
                <div>Start date: {r.start_date.slice(0, 10)}</div>
                <div>
                  End date:{' '}
                  {r.end_date ? r.end_date.slice(0, 10) : 'Still going'}
                </div>
                <a href={r.url} target="_blank">
                  Link to anime
                </a>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default AnimeCards;
